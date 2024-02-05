import productPic from './assets/iphoneSe.jpeg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={productPic} alt="profile picture"></img>
            <h2 className='card-title'>Iphone SE</h2>
            <p className='card-text'>Сверхбыстрый чип. Суперзвёздная камера. Всё это в прочном корпусе карманного размера. Сверхмощный чип A15 Bionic загружает
приложения молниеносно. А ещё он помогает улучшенному аккумулятору и системе iOS увеличить время работы без подзарядки. Обладает повышенной прочностью. Защищён от трещин и царапин. Устойчив к попаданию кофе, чая, газировки и даже пыли.</p>
        </div>
    );
}

export default Card