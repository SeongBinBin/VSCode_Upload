import React, {Component} from "react";

class PhotoGallery extends Component{
    state = {
        photos: []
    }

    addPhoto = () => {
        const photo = prompt("추가하려는 사진의 경로를 입력해주세요!")

        if(photo){
            this.setState((item) => ({
                photos: [...item.photos, photo]
            }))
        }
    }

    render(){
        const {photos} = this.state

        return(
            <>
                <button onClick={this.addPhoto}>사진 추가하기</button>
                <h1>포토 갤러리</h1>
                <h2>------------</h2>
                {photos.map((photos, index) => (
                    <img width="300" height="300" key={index} src={photos}></img>
                ))}
            </>
        )
    }
}
export default PhotoGallery