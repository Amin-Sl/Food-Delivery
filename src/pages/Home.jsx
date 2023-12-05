import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero-img.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "ارسال سریع",
    imgUrl: featureImg01,
    // desc: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده.",
  },

  {
    title: "سفارش آسان",
    imgUrl: featureImg02,
    // desc: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده.",
  },
  {
    title: "تحویل به موقع",
    imgUrl: featureImg03,
    // desc: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "سالاد") {
      const filteredProducts = products.filter(
        (item) => item.category === "سالاد"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "نوشیدنی") {
      const filteredProducts = products.filter(
        (item) => item.category === "نوشیدنی"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "چلوکباب") {
      const filteredProducts = products.filter(
        (item) => item.category === "چلوکباب"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "غذای ایرانی") {
      const filteredProducts = products.filter(
        (item) => item.category === "غذای ایرانی"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section className="home" >
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">سفارش فست فود با طمع مخصوص</h5>
                <h1 className="mb-4 hero__title">
                  سفارش <span> فست فود</span> تهران
                </h1>

                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                 از طراحان گرافیک است چاپگرها و متون بلکه روزنامه 
                 و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز 
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    سفارش <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">مشاهده همه</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    بدون هزینه حمل و نقل
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    پرداخت امن و راحت
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
      </section>

      <section  >
        <Container>
          <Row >
            <Col lg="12" className="text-center">
              <h4 className="feature__subtitle mb-4">خدمات ما</h4>
              <h2 className="feature__title">به راحتی از تو خونه </h2>
              <h2 className="feature__title">
                <span>سفارش </span>بده
              </h2>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold text-white mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="ProductCardx" >
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>غذاهای پرطرفدار</h2>
            </Col>

            <Col  lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  همه
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "سالاد" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("سالاد")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  سالاد
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "نوشیدنی" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("نوشیدنی")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  نوشیدنی
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "چلوکباب" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("چلوکباب")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  چلوکباب 
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "غذای ایرانی" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("غذای ایرانی")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  غذای ایرانی
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col  lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  چرا <span>زینو؟</span>
                </h2>
                <div className="content mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> داغ و خوشمزه</p>
                    
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> پشتیبانی با کیفیت
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>ارسال فوری  
                      
                    </p>
                  </ListGroupItem>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="mt-4 text-center mb-5 ">
              <h2>پیتزا ویژه</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col  lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h2 className="testimonial__title mb-4">
                رضایت <span>مشتریان</span> ما
                </h2>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
