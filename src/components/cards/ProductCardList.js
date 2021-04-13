import { render } from "@testing-library/react";
import React from "react";
import { Card, Tooltip } from "antd";
import { Link } from "react-router-dom";
import './ProductCard.css';
import { AiTwotoneStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { FaRupeeSign } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

// import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class ProductCardList extends React.Component{
   
      render(){
  return (

<div className="container">

  <div className="row">
    <div className="col-sm-3 col-md-3 col-lg-3 list">
    <img src="https://img-b.udemycdn.com/course/240x135/2795746_62d5.jpg?secure=uOa-gItU6n3YdiuAGhxhyw%3D%3D%2C1618273882%201x,%20https://img-b.udemycdn.com/course/480x270/2795746_62d5.jpg?secure=5zuRE7KASUqKF6FMectF4w%3D%3D%2C1618273882%202x" />
      <p>React JS- Complete Guide for Frontend Web Development [2021]</p>
      <h6>Become an expert React JS Developer...</h6><p>4.4
      <AiTwotoneStar className="starIcon"/><AiTwotoneStar className="starIcon" />
      <AiTwotoneStar className="starIcon"/><AiTwotoneStar className="starIcon"/>
      <AiOutlineStar />&nbsp;(1,336)</p>
      <h5><FaRupeeSign/>455/<span class="price">6,400</span></h5>
    </div>
    <div className="col-sm-3 col-md-3 col-lg-3 list">
    <img src="https://img-b.udemycdn.com/course/240x135/2485240_d405.jpg?secure=PrXFOy6KIlox9pKLQGPnnA%3D%3D%2C1618264410 1x, https://img-a.udemycdn.com/course/480x270/2485240_d405.jpg?UNffjFR6iMbwSvgiVimt9sX_ceQDQSmM11cqpaOvrSmkSV3n_m7sX8FTPGQ0qlk0q1eiXR0qPtKBt8LYR9AyFvZ8zrYRjMj99_ZSg5NaCbKMfsw9OscwjBv8mWxVQQ 2x" />
      <p>Python Bootcamp 2021 Build 15 working Applications</p>
      <h6>Lorem Ipsum is simply..</h6><p>3.0
      <AiTwotoneStar className="starIcon"/><AiTwotoneStar className="starIcon" />
      <AiTwotoneStar className="starIcon"/><AiOutlineStar/>
      <AiOutlineStar />&nbsp;(1,336)</p>
      <h5><FaRupeeSign/>656/<span class="price">12,160</span></h5>
    </div>
    <div className="col-sm-3 col-md-3 col-lg-3 list">
    <img src="https://img-a.udemycdn.com/course/240x135/2691654_2f52_3.jpg?wOeRFCaOXaMt6B1OzW8pJX29Q8II5I2oHXkzsnfHKmVxJ3fnZu6JX2mEV4s_NqIe7BwHFKUGT-9yS01ztpnwcf2Aws2mPCZAcg6YuhlDKtXM2-J7tG8oaElO_KGjsGPX 1x, https://img-a.udemycdn.com/course/480x270/2691654_2f52_3.jpg?0wnGBtv7rY1D79xhUDvxBOsZev4A6JvE2AvTXgySXcxfR3eG1zBrXKP8nYuZRZWz5BAsOmVvqVeWJKPzNN_9e14jq6JAOc8EqU5TTM9vt0YyfoKpsJedK_bgyWDT0lg2 2x" />
      <p>Java from Zero to First Job: Part 1 - Practical Guide Updated April 2021</p>
      <h6>Learn complete python with basics.. </h6><p>4.0
      <AiTwotoneStar className="starIcon"/><AiTwotoneStar className="starIcon" />
      <AiTwotoneStar className="starIcon"/><AiTwotoneStar className="starIcon"/>
      <AiOutlineStar />&nbsp;(1,574)</p>
      <h5><FaRupeeSign/>455/<span class="price">6400</span></h5>
    </div>
    <div className="col-sm-3 col-md-3 col-lg-3 list">
    <img src="https://img-a.udemycdn.com/course/240x135/3824776_abb9.jpg?42LRH8Wzfx5PrcmOWJldR_MF3_M-d-HsHrrSMVfpAmU5FYCRULaD68a7XjaL1o97qC9UFQ0wf-QbyxIjqaH9uJ2xi22XiyHqiOKxMCu4luKRo1AF8j675kbtYCAvNg 1x, https://img-a.udemycdn.com/course/480x270/3824776_abb9.jpg?0XVc42bdY3Kva71_BLHfdRidGDmkbTbPo1_xXi6Q_AUnFFeUoJ9tkEEDvtizNtRsYE8r7RGhKIqcV6SZ2ohurmyctkNMObGIxLEJg8dxwB7QrSDFOWncDU8f2UDbSA 2x" />
      <p>The Complete SQL Bootcamp 2021: from Zero to Hero SQL</p>
      <h6>Learn how to create your own..</h6><p>4.0
      <AiTwotoneStar className="starIcon"/><AiOutlineStar />
      <AiOutlineStar/><AiOutlineStar/>
      <AiOutlineStar />&nbsp;(405)</p>
      <h5><FaRupeeSign/>455/<span class="price">8,240</span></h5>
    </div>
  </div>
</div>

  );
      }
}

export default ProductCardList;
