
import './Cardv2.css'
interface Props{
    image:string
    title:string
    desc:string
    sub:string
}

function Card({image,title,desc,sub}: Props) {

  return (
    <div className='card-v2-wrapper'>
        <img className="card-v2-image" src={image}/>
        <div className="card-v2-info">
            <div className='card-v2-textual'>
              <div className='card-v2-head'>{title}</div>
              <div className='card-v2-sub'>{sub}</div>

              <div className='card-v2-desc'>{desc}</div>
              
            </div>
        </div>
        <a><button className='collection-button'>View Collection</button></a>
    </div>
  )
}

export default Card