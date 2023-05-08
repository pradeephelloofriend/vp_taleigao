import React from 'react'
import {Card, Tabs} from 'antd'
const { TabPane } = Tabs;
import {connect} from 'react-redux'
import { setTabKey } from '../../redux/menu/menuAction'
import {useRouter} from 'next/router'
import Image from 'next/image'
import moment from 'moment';
import RecentDevelopmentComponent from './RecentDevelopmentComponent'
import {getNewsLetterDataHome } from '../../lib/api'

const onChange = (key) => {
  // console.log(key);
};

const NewsSectionComponent = ({setTabKey,devData}) => {
  const router=useRouter()
  function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
    //alert(pathId)
    
            setTabKey(uri)
            router.push({
                pathname: `/${pathId}/`,
                query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
            })
}
  
  const [newsData,setNewsdata]=React.useState(null)
  React.useEffect(()=>{
      //setLoading(true)
      let isApiSubscribed = true;
      async function fetchData() {
             
          const nwData = await getNewsLetterDataHome()
          // 👇️ only update state if component is mounted
          if (isApiSubscribed) {
            // console.log('nwData new',nwData)
            setNewsdata(nwData)
          }
        }
      
        fetchData()
        return () => {
          // cancel the subscription
          isApiSubscribed = false;
        };
  },[])
  console.log('newsData',newsData)
  return (
      <>
          <section className="wrapper bg-light-orange">
              <div className="container py-10 py-md-10 pb-md-10">
                  <div className="row">
                      <div className="col-md-6 col-xl-6">
                          <div className='vil-info'>

                          {/* <Card className='abt-card mb-5' title={<span className='latest-title-box'><Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070375/vp/nagoa/news_chxnrr.png'} alt='' height={35} width={35} /><span className='abt-card-head-title'> Latest News</span></span>}> */}
                            <div className='news-sidebar m-t20'>
                              {newsData!==null?newsData.map((n,idx)=>{
                                //console.log('date',)
                                let day = n.newsLetter.date;
                                let parsed = moment(day, "DD/MM/YYYY");
                                const date=parsed.format("ll")
                                const tempDate=date.split(',')
                                //console.log('date-nes',tempDate)

                                return(
                                  <Card className='abt-card mb-5' title={<span className='latest-title-box'><Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070375/vp/nagoa/news_chxnrr.png'} alt='' height={35} width={35} /><span className='abt-card-head-title'> Latest News</span></span>}>
                                    <div className='news-sidebar m-t20'>
                                      <div key={idx} className="news-block">
                                        <a href="" title="">
                                          <h4></h4>
                                          <div className="news-date">{tempDate[0]}<span>{tempDate[1]}</span></div>
                                          <div className='news-content'>
                                            <h4>{n.newsLetter.title}</h4>
                                            <p>{n.newsLetter.desc}</p>

                                            {n.newsLetter.images !== null ? n.newsLetter.images.map((j, jx) =>
                                              <Image alt="s1" src={j.sourceUrl} height={200} width={200} />
                                            ) : <></>}

                                          </div>
                                          <div className='f-right news-status'>
                                            <span className="badge bg-c-red rounded-pill blink">New</span>
                                          </div>
                                        </a>
                                      </div>

                                    </div>

                                    <a
                                      onClick={() => goToPage('media/news-letters', 'news-letters', 'News Letters', 'Media Links', '/news-letters/', 'Yes')}
                                      href="#"
                                      className="more hover link-disp-dgreen mt-3 f-right">View More</a>
                                  </Card>
                                )
                              }
                                
                              ):<></>}
                                
                                
                            </div>

                            {/* <a 
                            onClick={() =>goToPage('media/news-letters','news-letters','News Letters','Media Links','/news-letters/','Yes')}
                            href="#" 
                            className="more hover link-disp-dgreen mt-3 f-right">View More</a> */}
                            {/* </Card> */}
                            
                          </div>
                      </div>


                      <div className="col-md-6 col-xl-6">
                        <div className='dev-card'>
                          <Card className='abt-card dev0-card bg-c-blue' 
                          title={
                          <>
                          <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070682/vp/nagoa/social_gbnief.png'} alt='' height={35} width={35} />
                            <span className='abt-card-head-title link-c-white'> Recent development works</span>
                          </>}>
                              {/* <RecentDevelopmentComponent devData={devData}/> */}
                              <RecentDevelopmentComponent/>
                            </Card>
                          </div>
                      </div>
                  </div>

              </div>
          </section>
      </>
  )
}
const mapDispatchToProps=dispatch=>({
  setTabKey:data=>dispatch(setTabKey(data))
})
export default connect(null,mapDispatchToProps)(NewsSectionComponent)