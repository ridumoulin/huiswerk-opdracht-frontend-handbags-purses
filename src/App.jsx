import './App.css'
import CustomButton from "./components/CustomButton.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import CustomProduct from "./components/CustomProduct.jsx";
import product from "./assets/brand.png";
import designers from "./assets/our_story.png";
import CustomTile from "./components/CustomTile.jsx";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <CustomButton
            buttonDescription="to the collection"
            disabledButton={false}
          />

          <CustomButton
              buttonDescription="shop all bags"
              disabledButton={false}
          />

          <CustomButton
              buttonDescription="pre-orders"
              disabledButton={true}
          />
        </nav>

        <main>
            <CustomProduct
                productLabel="Best seller"
                productPicture={bag1}
                productTitle="The handy bag"
                productPrice={400}
            />

            <CustomProduct
                productLabel="Best seller"
                productPicture={bag2}
                productTitle="The stylish bag"
                productPrice={250}
            />

            <CustomProduct
                productLabel="Best seller"
                productPicture={bag3}
                productTitle="The simple bag"
                productPrice={300}
            />

            <CustomProduct
                productLabel="Best seller"
                productPicture={bag4}
                productTitle="The trendy bag"
                productPrice={150}
            />
        </main>
        <footer>
            <CustomTile title="The Brand">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ipsa quibusdam rem tenetur voluptatem! Beatae commodi ducimus nam reprehenderit tempora.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi ea eaque eius labore, laborum libero minima nemo praesentium voluptatum.</p>
            </CustomTile>

            <CustomTile
                brandPicture={product}
            />

            <CustomTile
                brandPicture={designers}
            />

            <CustomTile title="Our Story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aperiam aspernatur corporis culpa deserunt dolores fugiat harum, impedit iusto, non omnis quibusdam quod quos ratione repudiandae sequi soluta veritatis vero.</p>
            </CustomTile>

            {/*<section>*/}
            {/*    <h2>The Brand</h2>*/}
            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ipsa quibusdam rem tenetur voluptatem! Beatae commodi ducimus nam reprehenderit tempora.</p>*/}
            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi ea eaque eius labore, laborum libero minima nemo praesentium voluptatum.</p>*/}
            {/*</section>*/}

            {/*<section>*/}
            {/*    <img src={product} alt="Image brand"/>*/}
            {/*</section>*/}

            {/*<section>*/}
            {/*    <img src={designers} alt="Image brand"/>*/}
            {/*</section>*/}

            {/*<section>*/}
            {/*    <h2>Our Story</h2>*/}
            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem consequuntur earum est explicabo facere fugit harum iure, magni nemo officiis porro saepe sint, soluta tempora, tempore vel velit voluptatem!</p>*/}
            {/*</section>*/}
        </footer>
      </>
  )
}

export default App
