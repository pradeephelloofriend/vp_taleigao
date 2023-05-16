import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Button } from 'antd';
import { MobileOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { selectMenuData } from '../../redux/menu/menuSelector';
import { setTabKey } from '../../redux/menu/menuAction';
import { createStructuredSelector } from 'reselect'
import { useRouter } from 'next/router'
import Image from 'next/image'
import icon1 from '../../public/img/home/report.png'

const MenuItemComponent = ({ menuData ,setTabKey}) => {
    // console.log('menuData2', menuData)

    const router = useRouter()
     //console.log('router', router)
    function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
        //alert(pathId)
                setTabKey(uri)
                router.push({
                    pathname: `/${pathId}/`,
                    query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
                })
    }
    function goToPage2(pathId,iscomplete) {
        
            //setTabKey(uri)
            router.push({
                pathname: `/${pathId}/`,
                query: {iscomplete:iscomplete }
            })
    }
    return (
        <>
            <Nav activeKey="/home">
            {menuData?menuData.map((i, index) =>
               
               i.node.childItems.edges.length<1 ?
                   <Nav.Item key={index}>
                       <Nav.Link onClick={() => goToPage2(i.node.route.link,i.node.route.iscomplete)} >{i.node.label}</Nav.Link>
                   </Nav.Item>
                   :
                   <NavDropdown key={index} title={i.node.label} id="nav-dropdown" renderMenuOnMount={true}>
                       {menuData?i.node.childItems.edges.map((d,ind) =>
                   
                           <NavDropdown.Item key={ind} eventKey={`${index}.${ind}`} onClick={() =>goToPage(i.node.route.link+'/'+d.node.route.link,d.node.route.code,d.node.label,i.node.label,d.node.uri,d.node.route.iscomplete)} >{d.node.label} </NavDropdown.Item>
                           ):<></>}



                   </NavDropdown>
           ):<></>}

                        {/*<Nav.Item>
                            <Nav.Link onClick={()=>router.push('/dashboard/')}>Dashboard</Nav.Link>
                        </Nav.Item>*/}

                        
            </Nav>

            <div className="d-flex flex-row align-items-center nav-menu-right bg-orange" onClick={() => goToPage('complains/', 'complains', 'complains', 'complains', '', 'Yes')}>
                <div className="div1call">
                    <div className="mx-auto me-2 mb-lg-2 mb-xl-0 mt-2"><a><Image src={icon1} alt="" /></a> </div>
                </div>
                <div className="div1call">
                    <p className='mb-0' >Have any Complains?</p>
                    {/* <p className='mb-0'><span className='main-color-font'></span><a href="tel:9326574349" >(+91) 9326574349</a></p> */}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    menuData: selectMenuData
})
const mapDispatchToProps=dispatch=>({
    setTabKey:data=>dispatch(setTabKey(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(MenuItemComponent)
