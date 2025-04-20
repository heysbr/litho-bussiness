import React, { memo, useContext, useEffect } from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap';

export const Header = memo((props) => {
    // Add Global Header Data
    const { setHeaderHeight } = useContext(GlobalContext);
    const { scrollY } = useScroll();
    const [scrollPos, setScrollPos] = useState({
      y: 0,
      prevY: -1,
      directionDown: true,
    });
    const location = useLocation()
  
    useEffect(() => {
      let headerEl = document.querySelector("header");
  
      // Calculate header height
      function setTopSpace() {
        let windowWidth = window.innerWidth,
          headerheight = (props.topSpace.desktop && props.topSpace.desktop === true) ? headerEl.offsetHeight : 0;
  
        if (windowWidth <= 1199 && props.topSpace.lg) {
          headerheight = props.topSpace.lg === true ? headerEl.offsetHeight : 0;
        }
  
        if (windowWidth <= 991 && props.topSpace.md) {
          headerheight = props.topSpace.md === true ? headerEl.offsetHeight : 0;
        }
  
        if (windowWidth <= 767 && props.topSpace.sm) {
          headerheight = props.topSpace.sm === true ? headerEl.offsetHeight : 0;
        }
  
        if (windowWidth <= 575 && props.topSpace.xs) {
          headerheight = props.topSpace.xs === true ? headerEl.offsetHeight : 0;
        }
  
        setHeaderHeight(headerheight);
      }
  
      setTopSpace();
  
      window.addEventListener("load", setTopSpace);
      window.addEventListener("resize", setTopSpace);
  
      if (document.body.classList.contains("mobile-menu")) {
        document.body.classList.remove("navbar-collapse-show")
        document.body.classList.remove("menu-modern")
        document.body.classList.remove("menu-full")
        document.body.style.removeProperty("overflow");
      }
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
  
    useEffect(() => {
      let lastScrollTop = 0;
      scrollY.onChange((pos) => {
        if (pos > lastScrollTop) {
          setScrollPos({
            ...scrollPos,
            y: pos,
            prevY: pos - 1,
            directionDown: true,
          });
        } else {
          setScrollPos({
            ...scrollPos,
            y: pos,
            prevY: pos - 1,
            directionDown: false,
          });
        }
  
        if (pos === 0) {
          setScrollPos({ ...scrollPos, directionDown: true });
        }
        lastScrollTop = pos;
      });
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    return (
      <header
        className={`${props.className ? props.className : ""}${scrollPos.y > 5 ? " sticky-header" : ""}${scrollPos.directionDown === false ? " header-appear" : ""}${props.type ? ` ${props.type}` : ""
          }`}
      >
        {props.children}
      </header>
    );
  });


    export const Topbar = ({ className, ...props }) => {
        useEffect(() => {
          let topbar = document.querySelector(".top-bar");
          if (typeof topbar != "undefined" && topbar != null) {
            let topbarHeight = `${topbar.clientHeight}px`;
            topbar.style.setProperty("--topbar-height", topbarHeight);
          }
        }, []);
      
        return (
          <div className={`top-bar${className ? ` ${className}` : ""}`} {...props}>
            {props.children}
          </div>
        );
      };

export default function Head() {
  return (
    <Header className="header-with-topbar" topSpace={{ desktop: true }} type="reverse-scroll">
    <Topbar className="bg-lightgray border-b home-business-topbar border-[#0000001a] sm:hidden md:px-0 header-with-topbar border-bottom px-[35px]">
      <Container fluid>
        <Row className="justify-between pl-[15px] lg:pr-[15px] items-center">
          <Col className="col-12 text-center sm:text-start col-sm-auto me-auto ps-lg-0">
            <SocialIcons theme="social-icon-style-01" size="xs" iconColor="dark" data={SocialIconsData} />
          </Col>
          <Col className="col-auto none sm:block text-end lg:px-0">
            <span className="top-bar-contact-list border-l border-inherit	py-[9px] px-[18px] text-[13px] inline-block float-left">
              <i className="feather-phone-call text-darkgray mr-[6px] text-md relative top-[1px]"></i>  0222 8899900
            </span>
            <span className="border-l border-inherit py-[9px] pl-[18px] text-[13px] inline-block float-left border-r-0 pr-0">
              <i className="feather-map-pin text-darkgray mr-[6px] text-md relative top-[1px]"></i> 401 Broadway, 24th Floor, San Francisco
            </span>
          </Col>
        </Row>
      </Container>
    </Topbar>
    <HeaderNav fluid="fluid" theme="light" bg="white" menu="light" className="px-[35px] py-[0px] md:px-[15px] sm:px-0" containerClass="md:px-0">
      <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
        <link aria-label="header logo" className="flex items-center" to="/">
          <Navbar.Brand className="inline-block p-0 m-0">
            <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-gradient-sky-blue-pink.webp' data-rjs='/assets/img/webp/logo-gradient-sky-blue-pink@2x.webp' alt='logo' />
            <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-black.webp' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
            <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-gradient-sky-blue-pink.webp' data-rjs='/assets/img/webp/logo-gradient-sky-blue-pink@2x.webp' alt='logo' />
          </Navbar.Brand>
        </link>
      </Col>
      <Navbar.Toggle className="order-last md:mx-[15px]">
        <span className="navbar-toggler-line"></span>
        <span className="navbar-toggler-line"></span>
        <span className="navbar-toggler-line"></span>
        <span className="navbar-toggler-line"></span>
      </Navbar.Toggle>
      <Navbar.Collapse className="col-auto justify-end p-0">
        <Menu {...props} />
      </Navbar.Collapse>
      <Col className="col-auto text-right !pr-0 pl-[15px] md:pl-0 md:pr-[15px] sm:pr-0">
        <SearchBar className="pl-[17px] xs:px-[15px]" />
        <HeaderLanguage className="pl-[17px] xs:pl-0 xs:pr-0" />
      </Col>
    </HeaderNav>
  </Header>
  )
}
