import Cat from "../data/cat";
import CatImage from "./cat_image";
import { CatImageProps } from "./cat_image";


import cat1 from '../assets/images/cat1.jpg';
import cat2 from '../assets/images/cat2.jpg';
import cat3 from '../assets/images/cat3.jpg';
import cat4 from '../assets/images/cat4.jpg';
import cat5 from '../assets/images/cat5.jpg';
import cat6 from '../assets/images/cat6.jpg';
import cat7 from '../assets/images/cat7.jpg';
import cat8 from '../assets/images/cat8.jpg';
import cat9 from '../assets/images/cat9.jpg';
import cat10 from '../assets/images/cat10.jpg';
import cat11 from '../assets/images/cat11.jpg';
import cat12 from '../assets/images/cat12.jpg';

export interface CatCardProps {
    catObject : Cat;
    catIndex : number;
}

export interface CatImageData {
    
}



const images = [
	{
		image: cat1,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'amblin',
		attributionUrl: 'https://www.flickr.com/people/amblin/'
	},
	{
		image: cat2,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'ivva',
		attributionUrl: 'https://www.flickr.com/people/ivva/'
	},
	{
		image: cat3,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-ND 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
		attributionName: 'Rachele Pettarelli Ph',
		attributionUrl: 'https://www.flickr.com/people/rachephotos/'
	},
	{
		image: cat4,
		altText: 'Describe this cat!',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'renarl',
		attributionUrl: 'https://www.flickr.com/people/renarl/'
	},
	{
		image: cat5,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'x-oph',
		attributionUrl: 'https://www.flickr.com/people/x-oph/'
	},
	{
		image: cat6,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-ND 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
		attributionName: 'arrathoonlaa@att.net',
		attributionUrl: 'https://www.flickr.com/people/21851382@N04/'
	},
	{
		image: cat7,
		altText: 'Describe this cat!',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'pavlovskyy',
		attributionUrl: 'https://www.flickr.com/people/pavlovskyy/'
	},
	{
		image: cat8,
		altText: 'Describe this cat!',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'AleGranholm',
		attributionUrl: 'https://www.flickr.com/people/darthale/'
	},
	{
		image: cat9,
		altText: 'Describe this cat!',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'Sardonic G',
		attributionUrl: 'https://www.flickr.com/people/24039825@N06/'
	},
	{
		image: cat10,
		altText: 'Describe this cat!',
		licenceType: 'CC BY 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
		attributionName: 'www.metaphoricalplatypus.com',
		attributionUrl: 'https://www.flickr.com/people/29638108@N06/'
	},
	{
		image: cat11,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'abraham.williams',
		attributionUrl: 'https://www.flickr.com/people/4braham/'
	},
	{
		image: cat12,
		altText: 'Describe this cat!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'x-oph',
		attributionUrl: 'https://www.flickr.com/people/x-oph/'
	}
];


// const CatCard: React.FC<Cat> = (props) => {
// 	// console.log(
// 	// 	'CatCard receiving props from App?! Come in App?! 😸 Props received are: ',
// 	// 	props
// 	// );

// 	return (
// 		<div className='card'>
// 			<h3 className='card__text card__header'>{props.name}</h3>
// 			<p className='card__text'>{props.species}</p>
// 			<p className='card__text'>Favourite Food(s): {props.favFoods}</p>
// 			<p className='card__text'>{props.birthYear}</p>
// 		</div>
// 	);
// };

const CatCard: React.FC<CatCardProps> = (props) => {
	// console.log(
	// 	'CatCard receiving props from App?! Come in App?! 😸 Props received are: ',
	// 	props
	// );

	return (
		<div className='card'>
			<h3 className='card__text card__header'>{props.catObject.name}</h3>
			<p className='card__text'>{props.catObject.species}</p>
			<p className='card__text'>Favourite Food(s): {props.catObject.favFoods}</p>
			<p className='card__text'>{props.catObject.birthYear}</p>
            {/* <CatImage image={cat1} altText="A lovely cat (or your own description here!)"/> */}
            
		</div>
	);
};

export default CatCard;