import { render } from "@testing-library/react";
import logo from '../logo.svg';
import YouTube from 'react-youtube';
// https://github.com/tjallingt/react-youtube


function YtBox() {
    
    let videoId='v4xZUr0BEfE';    //v4xZUr0BEfE
    let aspectRatio="16:9";            /* default -> "16:9" */
    let overlay="rgba(0,0,0,.0)";                /* default -> null | e.g. "rgba(0,0,0,.4)" */
    let className=null;              /* default -> null */
    let nocookie=false;                 /* default -> false | sets host to https:/*www.youtube-nocookie.com to avoid loading Google's cookies */
    //let playerOptions={loop:1,start:65,end:349};          /* default -> {};  | https://developers.google.com/youtube/player_parameters*/
    let opts={
        
        height: '100%',
        width: '100%',
        playerVars:{modestbranding:1,start:65,end:349,autoplay: 1,mute:1,listType: 'playlist',list: 'PLtQPyAS-2wdsWqq4F3OL6AaN0Hr0WUrEq',loop:1}
    };
    const onReady=(e)=> {
        console.log('onReady');
        e.target.setPlaybackQuality('hd1080'); //small,medium,large,hd720,hd1080,highres,default
        e.target.setVolume(50);
        e.target.playVideo();
       };                  /* default -> null | returns event with player object */

    const onPlay=(e)=> {
        const currentTime = e.target.getCurrentTime();
        let tmp_vid=e.target.getVideoUrl().split("&v=")[1];
        console.log('onPlay');
        
        // e.target.unMute(); Youtube api can't autoplay with unmute
        if(String(tmp_vid)=='v4xZUr0BEfE'){
            if (currentTime < 65) {
                e.target.seekTo(65);
                
            }
        }        
        e.target.playVideo();
    };                  /* default -> null | returns event with player object */
    
    const onStateChange = (e) => {
        // const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        console.log('onStateChange');
        //e.target.setVolume(50);

  
    };       
    const onPause=(e) => {

        
    };                         /* default -> null | returns event with player object */

    return(
            <div className="videoContainer">
                <YouTube 
                videoId={videoId}                /* default -> null */
                aspectRatio={aspectRatio}            /* default -> "16:9" */
                overlay={overlay}                /* default -> null | e.g. "rgba(0,0,0,.4)" */
                className={className}              /* default -> null */
                nocookie={nocookie}                 /* default -> false | sets host to https:/*www.youtube-nocookie.com to avoid loading Google's cookies */
                opts={opts}          /* default -> {}  | https://developers.google.com/youtube/player_parameters*/
                onReady={(e) => onReady(e)}                  /* default -> null | returns event with player object */
                onEnd={null}                    /* default -> null | returns event with player object */
                onPlay={onPlay}                   /* default -> null | returns event with player object */
                onPause={(e) => onPause(e)}                  /* default -> null | returns event with player object */
                onError={null}                  /* default -> null | returns event with player object */
                onStateChange={(e) => onStateChange(e)}            /* default -> null | returns event with player object */
                onPlaybackRateChange={null}     /* default -> null | returns event with player object */
                onPlaybackQualityChange={null}  /* default -> null | returns event with player object */
                >
                </YouTube>
            </div>
        // </div>
        
        


    );
}

export default YtBox;
