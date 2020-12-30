import Head from 'next/head'
import Mainlayout from '../../layout/mainlayout'
import { Banner, Product, About, ContactUs } from '../../component/pages'
import { db } from "../../firebaseConfig";
import { Toast } from "../../service/toast";
export default class Home extends React.Component {


  state = {
    bannerImg: '',
    productList: [],
    productLoder: true,
    about: {
      createDate: '',
      text: '',
      updatedDate: ''
    },
    allPromos: []
  }




  componentDidMount() {
    let { allPromos } = this.state;
    db.collection("banner",).doc("001").get().then((docRef) => {
      let { b_img } = docRef.data();
      allPromos.push('1');
      this.setState({ bannerImg: b_img, allPromos })
    }).catch((error) => { 
       Toast({ type: 'danger', message: 'Internal server error 500', title: 'Error' })
      })

    db.collection("product")
    .where("active", "==", true).get().then((querySnapshot) => {
      let data = querySnapshot.docs.map(doc => {
        console.log('LOG 1', doc.data());

        return { id: doc.id, ...doc.data() }
      });
      console.log('LOG 2', data);
      allPromos.push('2');
      this.setState({ productList: data, productLoder: false, allPromos })
    }).catch((error) => { 
       Toast({ type: 'danger', message: 'Internal server error 500', title: 'Error' })
      })


    db.collection("about").doc("001").get().then((docRef) => {
      allPromos.push('3')
      this.setState({ about: docRef.data(), isLoder: false, allPromos })
      // console.log(docRef.data())
    }).catch((error) => { 
      Toast({ type: 'danger', message: 'Internal server error 500', title: 'Error' }) 
      this.setState({ isLoder: false })
     })
  }



  



  render() {
    let { bannerImg, productList, productLoder, about, allPromos } = this.state;
    return (
      <div >
        <Head>
          <title>NRS CHICKEN</title>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://smtpjs.com/v3/smtp.js"></script>
        </Head>
        <Mainlayout headerLoder={!(allPromos.length !== 3)}>
          {allPromos.length === 3 ?
            <>
              <Banner bannerImg={bannerImg} />
              <Product productList={productList} productLoder={productLoder} />
              <ContactUs />
              <About about={about} />
            </> : ""}
        </Mainlayout>
      </div>
    )
  }
}
