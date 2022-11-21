import './style.css'
import conor from  './img/conor.webp'
import valdivia from './img/Valdivia.jpg'
import offset from './img/Offset.jpg'
import mark from './img/Mark.jpg'


export function Story(){

    return (
        <div className="container">
            <div className="user-elements">
                <div>

                    <img className="image-user-story" src={ conor }  />

                 </div>
                 <span>conor</span>
            </div>
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src={ valdivia }  />
                </div>
                <span>valdivia</span>
            </div>
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src={ offset }  />
                </div>
                <span>Offset</span>
            </div>
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src= { mark }  />
                </div>
                <span>mark</span>
            </div>
        </div>
    )
}