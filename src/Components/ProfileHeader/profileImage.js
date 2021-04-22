import React, {Component} from "react";
import defaultImage from '../../assets/images/defaultImage.jpg';

export class ProfileImage extends Component {
        state = {
            defaultImage: defaultImage
        }

        imageHandler = (e) => {
           const reader = new FileReader();
           reader.onload = () => {
               if (reader.readyState === 2) {
                   this.setState({defaultImage: reader.result})
               }
           }
           reader.readAsDataURL(e.target.files[0]);
        }

    render() {
        return (
            <div className='page'>
                <div className='container'>
                    <div className='img-holder'>
                        <img src={this.state.defaultImage} id='img' className='img' />
                    </div>
                    <input
                        type='file'
                        name='image-upload'
                        id='input'
                        accept='image/*'
                        onChange={this.imageHandler}
                    />
                    <div className='label'>
                        <label htmlFor='input' className='image-upload'>
                            <i className='material-icons'></i>
                            Загрузить фото
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}