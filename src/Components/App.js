import React from 'react';
import unsplash from '../Api/unsplash';
import youtube from '../Api/youtube';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import ShowSeason from './ShowSeason';
import faker from 'faker';
import Loader from './Loader';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import VideoSearchBar from './VideoSearchBar'
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import SongList from './SongList'
import SongDetail from './SongDetail';



const App = () => {
    return (
        <div className="ui container comments" style={{marginTop:'50px'}}>
          <ApprovalCard> 
            <CommentDetail author="Himalay" time="7:00 Pm" text="Hii Chandu !" avatar={faker.image.image()} />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail author="Chandrakant" time="7:05 Pm" text="Hii Himalaya !" avatar={faker.image.image()}/>
            </ApprovalCard>
          <ApprovalCard>
            <CommentDetail author="Praveen" time="7:10 Pm" text="Kya halchal laundo !" avatar={faker.image.image()}/>
          </ApprovalCard>
            </div>
    )};

class WeatherApp extends React.Component
{

  state = {lat:null, errorMsg:''}

  componentDidMount()
  {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat:position.coords.latitude});
      },
      err => {
        this.setState({errorMsg:err.message});
      }
    );
  }

  loadContent()
  {
    if(this.state.lat && !this.state.errorMsg){
      return <ShowSeason lat={this.state.lat}/>
        }
        if(!this.state.lat && this.state.errorMsg){
          return <div>Eror:{this.state.errorMsg}</div>
            }
           return <Loader textMsg="Waiting For Users Location"/>
  }

  render(){
    return (
    <div className="border red">
      {this.loadContent()}
    </div>
    )
  }
}

class SearchApp extends React.Component{

    state = { images : []}

    componentDidMount = async () => {
      const response = await unsplash.get('/search/photos',{
        params:{query:'Nature'}
        })
        this.setState({ images : response.data.results})
    }

    onSearchSubmit = async(term) =>
    {
        // const response = await axios.get('https://api.unsplash.com/search/photos',{
        //                     params:{query:term},
        //                     headers:{
        //                         Authorization:'Client-ID xP94jvVDXvD6VpMwCSv53tzvdA5b5Q6CmPIuujjY6r4'
        //                     }
        // })

         const response = await unsplash.get('/search/photos',{
                            params:{query:term}
        })


        this.setState({ images : response.data.results})
    }

    render(){
    return (
        <div>
            <SearchBar onSubmit={this.onSearchSubmit}/>
           <ImageGallery images={this.state.images}/>
        </div>
    )
    }
}

class VideoSearchApp extends React.Component{

  state = { videos: [] , video_selected: null }

 componentDidMount = async () => {
  const response = await youtube.get('/search',
  {
    params:{
      q:'Himalayas'
    }
  });
  this.setState({videos:response.data.items, video_selected:response.data.items[0]})
 
 }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search',
    {
      params:{
        q:term
      }
    });
    this.setState({videos:response.data.items, video_selected:response.data.items[0]})
   
  }

  OnVideoClick = (term) => {
   this.setState({video_selected:term});
  }
  render()
  {
    return (
      <div style={{padding:'10px'}}>
        <VideoSearchBar onSubmit={this.onSearchSubmit}/>
        <div style={{display:'flex',width:'100%'}}>
          <div style={{width:'65%'}}>
            <VideoPlayer video={this.state.video_selected}/>
          </div>
          <div style={{width:'30%',marginLeft:'20px'}}>
            <VideoList OnClick={this.OnVideoClick} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    )
  }
}

const SongApp = () => {
  return (
    <div className="ui container grid" style={{padding:'10px'}}>
      <div className="ui row">
        <div className="column eight wide">
        <SongList/>
      </div>
      <div className="column eight wide">
        <SongDetail/>
      </div>
      </div>
      </div>
  )
}



export default SongApp


