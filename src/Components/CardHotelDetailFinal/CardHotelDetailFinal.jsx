import './CardHotelDetailFinal.css'
import Card from 'react-bootstrap/Card';
import imgLocation from '../../assets/images/Location.svg'
import cardHotel from '../../assets/images/cardHotel.svg'
import line5 from '../../assets/images/Line5.svg'
import line6 from '../../assets/images/Line6.svg'
import vectorHotel from '../../assets/images/VectorHotel.svg'
const CardHotelDetailFinal = () => {
    return (
        <section className='Aya_Hotel_Details_Final'>
        <Card className='cards'>
            <Card.Body>
            <div className='part1 d-flex justify-content-between'>
                <Card.Title className='title'>Superior room - 1 double bed or 2 twin beds</Card.Title>
                <span className='span1'>240 $<span className='span2'>/night</span></span> 
            </div>
            <div className='part2 '>
                <div className="part2-1 d-flex">
                    <Card.Img className='image' src={cardHotel} />
                    <p className='part2-2 p'>
                        <p className='span1'>CVK Park Bosphorus Hotel Istanbul</p>
                        <p className='span2'><img src={imgLocation} alt="Location" /> Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                    </p>
                </div>
            </div>
            <div className="part3">
                <div className="part3-1">
                    <Card.Title className='span1'>Thursday, Dec 8</Card.Title>
                    <Card.Title className='span2'>Check-In</Card.Title>
                </div>
                <div className="part3-2">
                    <Card.Img className='image-line5' src={line5} />   
                    <Card.Img className='image-vector' src={vectorHotel} />   
                    <Card.Img className='image-line6' src={line6} />
                </div> 
                <div className="part3-3">
                    <Card.Title className='span3'>Friday, Dec 9</Card.Title>
                    <Card.Title className='span4'>Check-Out</Card.Title>
                </div>
            </div>
            </Card.Body>
        </Card>
        </section>
    )
}

export default CardHotelDetailFinal