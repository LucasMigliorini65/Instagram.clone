
import './style.css'

import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty}  from 'react-icons/io'
import {BsChat } from 'react-icons/bs'
import {FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { BsEmojiSmile } from 'react-icons/bs'

import  casal  from './img/casallol.jpeg' 
import  Littles  from './img/OsLittles.jpeg'
import  golden from './img/golden.jpg'
import palmeiras from './img/palmeitas.jpg'
import acad from './img/acad.jpg'

export function Post() {
    return (
        <>
       
        <header className="header-post" >

            <div className="infos-post">
            <img className="img-header-post" src={ palmeiras } />
            <p>Palmeiras</p>
            </div>
            
            <FiMoreHorizontal/>
        </header>
        <div className="img-post">
        <img src={ acad }/>

        </div>

        <div className="footer-post">
            <IconContext.Provider value={{size:"30px"}}> 
            <section className="engagement-post">
            <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>


                        <div className="icon"><BsBookmark /></div>
            </section>
            </IconContext.Provider>
            <section className="like">
            <span>441 curtidas</span>
            </section>
            <div className="legend">
                <p>
                    <strong>Palmeiras</strong> Terceira academia. #hendeca
                </p>
            </div>
            <div className="time-post">
                <time>HÁ 1 HORA</time>
            </div>
            <div className="coment">
                <div className="fake-coment">
                 
                 <IconContext.Provider value={{size:'25px'}}>
                 
                 <div className="icon">
                 <BsEmojiSmile/>
                 </div>
                 </IconContext.Provider>
                 <input placeholder="adicione um comentário..."/>
                </div>
                
                <button>Publicar</button>
            </div>
        </div>

      
        <header className="header-post" >

<div className="infos-post">
<img className="img-header-post" src="https://avatars.githubusercontent.com/u/110692154?v=4" />
<p>lucas_migliorini65</p>
</div>

<FiMoreHorizontal/>
</header>
<div className="img-post">
<img src={ golden }/>

</div>

<div className="footer-post">
<IconContext.Provider value={{size:"30px"}}> 
<section className="engagement-post">
<div className="icons-1" >
                <div className="icon"><IoMdHeartEmpty /></div>
                <div className="icon"><BsChat /></div>
                <div className="icon"><FiSend /></div>
            </div>


            <div className="icon"><BsBookmark /></div>
</section>
</IconContext.Provider>
<section className="like">
<span>30 curtidas</span>
</section>
<div className="legend">
    <p>
        <strong>lucas_migliorini65</strong> fofinho
    </p>
</div>
<div className="time-post">
    <time>HÁ 10 MINUTOS</time>
</div>
<div className="coment">
    <div className="fake-coment">
     
     <IconContext.Provider value={{size:'25px'}}>
     
     <div className="icon">
     <BsEmojiSmile/>
     </div>
     </IconContext.Provider>
     <input placeholder="adicione um comentário..."/>
    </div>
    
    <button>Publicar</button>
</div>



</div>

<header className="header-post" >

<div className="infos-post">
<img className="img-header-post" src="https://avatars.githubusercontent.com/u/110692154?v=4" />
<p>lucas_migliorini65</p>
</div>

<FiMoreHorizontal/>
</header>
<div className="img-post">
<img src={ Littles }/>

</div>

<div className="footer-post">
<IconContext.Provider value={{size:"30px"}}> 
<section className="engagement-post">
<div className="icons-1" >
                <div className="icon"><IoMdHeartEmpty /></div>
                <div className="icon"><BsChat /></div>
                <div className="icon"><FiSend /></div>
            </div>


            <div className="icon"><BsBookmark /></div>
</section>
</IconContext.Provider>
<section className="like">
<span>61 curtidas</span>
</section>
<div className="legend">
    <p>
        <strong>lucas_migliorini65</strong> Essa equipe é TOP.
    </p>
</div>
<div className="time-post">
    <time>HÁ 14 MINUTOS</time>
</div>
<div className="coment">
    <div className="fake-coment">
     
     <IconContext.Provider value={{size:'25px'}}>
     
     <div className="icon">
     <BsEmojiSmile/>
     </div>
     </IconContext.Provider>
     <input placeholder="adicione um comentário..."/>
    </div>
    
    <button>Publicar</button>
</div>



</div>
        </>
    )
}