import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import logo from "./assests/olxlogodark.png";
import search from "./assests/searchicon.png";
import mobileApp from "./assests/phone-app.webp";
import appleStore from "./assests/appstore_2x.webp";
import playStore from "./assests/playstore_2x.webp";
import facebook from "./assests/facebook.png";
import twitter from "./assests/twitter1.png";
import instagram from "./assests/instagram.png";
import carTradeTech from "./assests/cartrade_tech.png";
import bikewale from "./assests/bikewale.png";
import carTrade from "./assests/cartrade.png";
import mobility from "./assests/mobility.png";
import carWale from "./assests/carwale.png";
import footerOlx from "./assests/footer-olx.png";
import play from "./assests/play.png";
import downArrow from "./assests/downarrow.png";
import sell from "./assests/screenshot.PNG";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" height={50} width={50} />
        </div>
        <div className="inputs">
          <div className="state">
            <button className="header-transparant-btn-left">
              <img
                src={search}
                alt=""
                height={20}
                width={20}
                className="seatchImg"
              />
            </button>
            <input type="text" placeholder="India" className="searchstate" />
            <button className="header-transparant-btn-right">
              <img src={downArrow} alt="" height={25} width={25} />
            </button>
          </div>

          <div className="find-items">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
              className="searchProducts"
            />
            <button className="search-btn">
              <img src={search} alt="" />
            </button>
          </div>
        </div>
        <div className="language">
          <button className="language-btn">English</button>
          <img src={downArrow} alt="" height={25} width={25} />
        </div>
        <div className="header-btns">
          <button className="login-btn">Login</button>
          <button className="login-btn">
            <img src={sell} alt="" height={50} width={110} />
          </button>
        </div>
      </div>
      <div className="categories">
        <div className="allCategory">
          <button className="all-cateogy-btn">ALL CATEGORIES</button>
          <img src={downArrow} alt="" height={25} width={25} />
        </div>
        <div className="category-list">
          <ul className="category-list-list">
            <li className="category-listitem">Cars</li>
            <li className="category-listitem">Motorcycles</li>
            <li className="category-listitem">Mobile Phones</li>
            <li className="category-listitem">
              For Sale: Houses & Appartments
            </li>
            <li className="category-listitem">Comercial & Other Vehicles</li>
            <li className="category-listitem">
              For Rent: Houses and Appartments
            </li>
          </ul>
        </div>
      </div>
      <div className="space"></div>
      <div className="products-wrapper">
        <div className="title-wrapper">
          <h2 className="products-title">Fresh recommendations</h2>
        </div>
        <div className="products">
          <Card
            sx={{
              width: {
                xs: 300,
                sm: 400,
                md: 270,
              },
              height: 400,
              position: "relative",
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://apollo.olx.in/v1/files/9vth7b0dvb94-IN/image;s=300x600;q=60"
                alt="green iguana"
              />

              <button
                onClick={() => console.log("Icon clicked")}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <FavoriteBorderIcon style={{ color: "gray" }} />
              </button>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: {
                xs: 300,
                sm: 400,
                md: 270,
              },
              height: 400,
              position: "relative",
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://apollo.olx.in/v1/files/9vth7b0dvb94-IN/image;s=300x600;q=60"
                alt="green iguana"
              />

              <button
                onClick={() => console.log("Icon clicked")}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <FavoriteBorderIcon style={{ color: "gray" }} />
              </button>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: {
                xs: 300,
                sm: 400,
                md: 270,
              },
              height: 400,
              position: "relative",
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://apollo.olx.in/v1/files/9vth7b0dvb94-IN/image;s=300x600;q=60"
                alt="green iguana"
              />

              <button
                onClick={() => console.log("Icon clicked")}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <FavoriteBorderIcon style={{ color: "gray" }} />
              </button>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: {
                xs: 300,
                sm: 400,
                md: 270,
              },
              height: 400,
              position: "relative",
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://apollo.olx.in/v1/files/9vth7b0dvb94-IN/image;s=300x600;q=60"
                alt="green iguana"
              />

              <button
                onClick={() => console.log("Icon clicked")}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <FavoriteBorderIcon style={{ color: "gray" }} />
              </button>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: {
                xs: 300,
                sm: 400,
                md: 270,
              },
              height: 400,
              position: "relative",
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://apollo.olx.in/v1/files/9vth7b0dvb94-IN/image;s=300x600;q=60"
                alt="green iguana"
              />

              <button
                onClick={() => console.log("Icon clicked")}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <FavoriteBorderIcon style={{ color: "gray" }} />
              </button>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: {
                xs: 300,
                sm: 400,
                md: 270,
              },
              height: 400,
              position: "relative",
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://apollo.olx.in/v1/files/9vth7b0dvb94-IN/image;s=300x600;q=60"
                alt="green iguana"
              />

              <button
                onClick={() => console.log("Icon clicked")}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <FavoriteBorderIcon style={{ color: "gray" }} />
              </button>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: {
                xs: 300,
                sm: 400,
                md: 270,
              },
              height: 400,
              position: "relative",
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://apollo.olx.in/v1/files/9vth7b0dvb94-IN/image;s=300x600;q=60"
                alt="green iguana"
              />

              <button
                onClick={() => console.log("Icon clicked")}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <FavoriteBorderIcon style={{ color: "gray" }} />
              </button>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: {
                xs: 300,
                sm: 400,
                md: 270,
              },
              height: 400,
              position: "relative",
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://apollo.olx.in/v1/files/9vth7b0dvb94-IN/image;s=300x600;q=60"
                alt="green iguana"
              />

              <button
                onClick={() => console.log("Icon clicked")}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <FavoriteBorderIcon style={{ color: "gray" }} />
              </button>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: {
                xs: 300,
                sm: 400,
                md: 270,
              },
              height: 400,
              position: "relative",
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://apollo.olx.in/v1/files/9vth7b0dvb94-IN/image;s=300x600;q=60"
                alt="green iguana"
              />

              <button
                onClick={() => console.log("Icon clicked")}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <FavoriteBorderIcon style={{ color: "gray" }} />
              </button>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: {
                xs: 300,
                sm: 400,
                md: 270,
              },
              height: 400,
              position: "relative",
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://apollo.olx.in/v1/files/9vth7b0dvb94-IN/image;s=300x600;q=60"
                alt="green iguana"
              />

              <button
                onClick={() => console.log("Icon clicked")}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <FavoriteBorderIcon style={{ color: "gray" }} />
              </button>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="load-more-btn-wrapper">
          <button className="load-more-btn">Load more</button>
        </div>
      </div>

      <div className="try-olx-app-wrapper">
        <div className="olx-app-img-wrapper">
          <img src={mobileApp} alt="" />
        </div>
        <div className="middle">
          <h2 className="try-olx-app">Try the olx app</h2>
          <p className="try-olx-para">
            Buy, sell and find just about anything using the app on your mobile.
          </p>
        </div>
        <hr />
        <div className="end">
          <h3>Get your app today</h3>
          <div className="mobile-app-images">
            <img src={appleStore} alt="" width={130} />
            <img src={playStore} alt="" width={130} />
          </div>
        </div>
      </div>
      <div className="space-bottom"></div>
      <div className="footer-1">
        <div className="footer-1-links">
          <h3 className="footer-1-title">Popular Locatrions</h3>
          <ul className="footer-1-list">
            <li className="footer-1-listitem">Kolkata</li>
            <li className="footer-1-listitem">Mumbai</li>
            <li className="footer-1-listitem">Chennai</li>
            <li className="footer-1-listitem">Pune</li>
          </ul>
        </div>
        <div className="footer-1-links">
          <h3 className="footer-1-title">Trending Locations</h3>
          <ul className="footer-1-list">
            <li className="footer-1-listitem">Bhubaneshwar</li>
            <li className="footer-1-listitem">Hyderabad</li>
            <li className="footer-1-listitem">Chandigarh</li>
            <li className="footer-1-listitem">Nashik</li>
          </ul>
        </div>
        <div className="footer-1-links">
          <h3 className="footer-1-title">About Us</h3>
          <ul className="footer-1-list">
            <li className="footer-1-listitem">Tech@OLX</li>
          </ul>
        </div>
        <div className="footer-1-links">
          <h3 className="footer-1-title">OLX</h3>
          <ul className="footer-1-list">
            <li className="footer-1-listitem">Blog</li>
            <li className="footer-1-listitem">Help</li>
            <li className="footer-1-listitem">Sitemap</li>
            <li className="footer-1-listitem">Legal & Privacy information</li>
            <li className="footer-1-listitem">
              Vulnerability Disclosure Program
            </li>
          </ul>
        </div>
        <div className="footer-1-links">
          <h3 className="footer-1-title">Follow Us</h3>
          <ul className="footer-1-list-social">
            <li className="footer-1-listitem">
              <img src={facebook} alt="" height={25} />
            </li>
            <li className="footer-1-listitem">
              <img src={twitter} alt="" height={25} />
            </li>
            <li className="footer-1-listitem">
              <img src={instagram} alt="" height={25} />
            </li>
            <li className="footer-1-listitem">
              <img src={play} alt="" height={25} />
            </li>
          </ul>
          <div className="footer-1-images">
            <img src={playStore} alt="" width={100} />
            <img src={appleStore} alt="" width={100} />
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div>
          <div className="footer-2-left">
            <img src={carTradeTech} alt="" height={100} />
          </div>
        </div>
        <hr />
        <div className="footer-2-right">
          <img src={footerOlx} alt="" height={80} />
          <img src={carWale} alt="" height={60} />
          <img src={bikewale} alt="" height={60} />
          <img src={mobility} alt="" height={60} />
          <img src={carTrade} alt="" height={60} />
        </div>
      </div>
      <div className="footer-3">
        <div>
              <span className="footer-3-text">Help - Sitemap</span>
        </div>
        <div>
              <span className="footer-3-text">All rights reserved © 2006-2024 OLX</span>
        </div>
      </div>
    </>
  );
}

export default App;
