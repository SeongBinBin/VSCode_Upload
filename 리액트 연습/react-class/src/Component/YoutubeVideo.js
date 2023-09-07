import React, {Children, Component} from "react";
import PropTypes from 'prop-types';

function YoutubeVideo({videoId, videoName, videoLength, videoDescription, videoAuthor, children}){
    return(
        <div id={videoId}>
            <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)}MB</h1>
            <h3>작성자 - {videoAuthor}</h3>
            <p>{videoDescription}</p>
            {children}
            <p>-------------------------------------------------------------------------</p>
        </div>
    )
}
export default YoutubeVideo

// 데이터 타입검증 (개발할때 필요한 코드)
YoutubeVideo.propTypes = {
    videoId: PropTypes.string,
    videoName: PropTypes.string,
    videoLength: PropTypes.string,
    videoDescription: PropTypes.string
}

// props 데이터 기본값 설정
YoutubeVideo.defaultProps = {
    videoAuthor: "디폴트 작성자"    // videoAuthor: null 또는 undefined
}