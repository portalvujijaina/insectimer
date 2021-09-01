import { render } from "@testing-library/react";
import logo from '../logo.svg';
import YoutubeBackground from 'react-youtube-background';

function YtBg() {
    
    let videoId='v4xZUr0BEfE';
    let aspectRatio="16:9";            /* default -> "16:9" */
    let overlay="rgba(0,0,0,.4)";                /* default -> null | e.g. "rgba(0,0,0,.4)" */
    let className=null;              /* default -> null */
    let nocookie=false;                 /* default -> false | sets host to https:/*www.youtube-nocookie.com to avoid loading Google's cookies */
    //let playerOptions={loop:1,start:65,end:349};          /* default -> {};  | https://developers.google.com/youtube/player_parameters*/
    let playerOptions={start:65,end:349,controls:1};
    const onReady=(e)=> {
        
        e.target.playVideo();
       };                  /* default -> null | returns event with player object */
    const onStateChange = (e) => {
        // const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        
        
        e.target.setVolume(50);
        if (currentTime > 349) {
            e.target.seekTo(65);
            // e.target.unMute();
        }
  
    };       
    const onPause=(e) => {

        
    };                         /* default -> null | returns event with player object */



    const Pausebtn=(e) => {
        e.target.unMute();
        
    };


    return(
        
            <YoutubeBackground className="youtube_layer"
            videoId={videoId}                /* default -> null */
            aspectRatio={aspectRatio}            /* default -> "16:9" */
            overlay={null}                /* default -> null | e.g. "rgba(0,0,0,.4)" */
            className={className}              /* default -> null */
            nocookie={nocookie}                 /* default -> false | sets host to https:/*www.youtube-nocookie.com to avoid loading Google's cookies */
            playerOptions={playerOptions}          /* default -> {}  | https://developers.google.com/youtube/player_parameters*/
            onReady={(e) => onReady(e)}                  /* default -> null | returns event with player object */
            onEnd={null}                    /* default -> null | returns event with player object */
            onPlay={null}                   /* default -> null | returns event with player object */
            onPause={(e) => onPause(e)}                  /* default -> null | returns event with player object */
            onError={null}                  /* default -> null | returns event with player object */
            onStateChange={(e) => onStateChange(e)}            /* default -> null | returns event with player object */
            onPlaybackRateChange={null}     /* default -> null | returns event with player object */
            onPlaybackQualityChange={null}  /* default -> null | returns event with player object */
            >
                <div className="Insec-timer"> </div>
                
                
                
            </YoutubeBackground>
        
            
        


    );
}

export default YtBg;
