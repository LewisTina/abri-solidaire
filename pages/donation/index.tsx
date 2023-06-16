import { useRouter } from 'next/router';
import { useEffect } from 'react';


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': any;
    }
  }
}

export default function Donation() {

  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      window.location.reload()
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete)
  }, [router])
  return (
    <div className={`flex w-full max-w-screen-xl xl:p-0 p-24 h-screen items-start overflow-hidden`}>

           <div 
              className={`
                w-full h-full
                z-0
                flex
                flex-col
                justify-center
              `}>

                <span className=" block text-center mb-16 text-4xl">
                  Faites un Don et Aidez des centaines de SDF
                </span>

              <div className="p-20 bg-primary rounded-xl">
                <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
                <stripe-pricing-table pricing-table-id="prctbl_1NJRgcD7QbiiVl4SzjAoJA8P"
                publishable-key="pk_live_51MbhM1D7QbiiVl4S0PRrE2W5XqAWerfzZ415a10zZCntFdVqhBybqFNoT2WuhYbVs1637yhuPXNcBlT5GE7AwvZa00qeqBsr90">
                </stripe-pricing-table>
              </div>

                <span className=" block text-center mt-16 text-xl">
                    Des paiements sécurisés pour faire un don en toute sécurité avec protection de vos données personnelles. 
                    <br />
                    <br />
                    <i className="fa fa-cc-visa"></i> &nbsp;
                    <i className="fa fa-cc-mastercard"></i> &nbsp;
                    <i className="fa fa-cc-amex"></i> &nbsp;
                    <i className="fa fa-cc-paypal"></i> &nbsp;
                    <i className="fa fa-cc-stripe"></i> &nbsp;
                    <i className="fa fa-credit-card"></i> &nbsp;
                </span>


           </div>

           

          <div className={`
                    w-1/2
                    left-0 top-0 
                    absolute
                    p-20
                    max-[768px]:w-full
                    flex
                    z-90
                    pointer-events-none
                    `} >
                <div className={`transition bg-primary w-96 blur-3xl opacity-40 aspect-square rounded-full`}>
                </div>
           </div>
           
    </div>
  )
}
