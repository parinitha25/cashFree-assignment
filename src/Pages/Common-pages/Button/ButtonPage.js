import React from "react";
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { PoweroffOutlined } from '@ant-design/icons';
import './ButtonPage.css';
import PropTypes from "prop-types";

function ButtonPage ({type,size,isBusy,icon,isDisabled,title}) {
	return(
		<div> 
			<Button 
				type={type}
				size={size}
				loading={isBusy}
				icon={icon?<PoweroffOutlined/>:''}
				disabled={isDisabled}
			>
				{title}
			</Button>
		</div>
	);
}

ButtonPage.propTypes = {
	title: PropTypes.any,
	icon: PropTypes.any,
	isBusy: PropTypes.bool,
	isDisabled: PropTypes.bool,
	size: PropTypes.any,
	type: PropTypes.string
};

ButtonPage.defaultProps = {
	title: undefined,
	icon: undefined,
	isBusy: false,
	isDisabled: false,
	size:  "default",
	type: "default"
};


export default ButtonPage;