import { Link } from 'react-router-dom';
import ButtonPage from '../Common-pages/Button/ButtonPage'
import './ButtonList.css';

function ButtonList () {
	return (
		<div className='pt-5'>
			<div className='row mb-5'>
				<h4>1. Large, Default and Small size buttons:</h4>
				<div className='col-4'><ButtonPage size="large" title="Large Button"/></div>
				<div className='col-4'><ButtonPage size="default" title="Default Button"/></div>
				<div className='col-4'><ButtonPage size="small" title="Small Button"/></div>
			</div>
			<hr/>
			<div className='row mb-5'>
				<h4>2. With and Without icon:</h4>
				<div className='col-6'><ButtonPage size="default" title="Button with icon" icon='true'/></div>
				<div className='col-6'><ButtonPage size="default" title="Button without icon" /></div>
			</div>
			<hr/>
			<div className="mb-5">
				<h4>3. Disabled state button:</h4>
				<ButtonPage size="default" title="Disabled" isDisabled='true'/>
			</div>
			<hr/>
			<div className='mb-5'>
				<h4>4. Loading state button:</h4>
				<ButtonPage size="default" title="Loading..." isBusy="true"/>
			</div>
			<hr/>
			<Link to='/' className='btn btn-secondary'>Go to home</Link>
		</div>
	);	
}

export default ButtonList;
