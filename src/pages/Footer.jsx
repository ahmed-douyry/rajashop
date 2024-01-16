import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Footer (){
    const styles={
        cont:{
        
        height: '1200px',
        zIndex: 3
            
        }
    }
    return(
        <div >
            <div style={styles.cont} className='container-fluid bg-black pt-16 '>
            <div className='container-fluid mt-5' >
            <div>
            <img src={require('../images/logo footer.png')} alt="" />
            </div>
            <div>
                <p className='text text-light'>
                Chez Rajashop, nous sommes fiers de vous offrir une expérience de magasinage exceptionnelle. Depuis notre fondation en 2023, nous avons travaillé sans 
                relâche pour devenir votre source préférée de produits de qualité à des prix abordables.
                </p>
            </div>
            <div className="row mt-5">
                <div className="col-md-2">
                    <h5 className='text text-light border-bottom pb-3 w-25'>AIDE</h5>
                    <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Qui sommes-nous ?</a></div>
                    <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Mentions légales</a></div>
                    <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Conditions d'utilisation</a></div>
                    <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Paiement sécurisé</a></div>
                    <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Livraison</a></div>
                    <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Conditions de retour</a></div>
                    <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Nous contacter</a></div>
                </div>
                <div className="col-md-3">
                <h5 className='text text-light border-bottom pb-3 '>PRODUITS HAUT DE GAMME</h5>
                <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Tenu de Match</a></div>
                <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Entrainement</a></div>
                <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Mode</a></div>
                <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Cadeaux Et Accesoires</a></div>
                </div>
                <div className="col-md-2">
                <h5 className='text text-light border-bottom pb-3 w-75'>MON COMPTE</h5>
                <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>creer un compte</a></div>
                <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>se connecter</a></div>
                <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Mon profil</a></div>
                <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Mon adresse</a></div>
                <div><a href="" className='text-white ' style={{textDecoration:'none',margin:'10px 0 10px 0'}}>Mes comandes</a></div>
                    
                </div>
                <div className="col-md-5">
                    
                </div>
                
            </div>
            <div className='mt-5'>
            <h5 className='text text-light border-bottom pb-3 w-25'>NEWS LETTER</h5>
            <p className='text text-light mt-3'>
            Recevez nos exclusivités en avant-première ! Abonnez-vous à notre newsletter pour ne rien manquer
                </p>
            </div>
            <div>
                <input type="text" className='form-control text-secondary rounded-0' placeholder='votre adresse electronique' style={{width:'93%',float:'left'}} />
                <button className='btn btn-success rounded-0'>Enoyer</button>
            </div>
            <div className='mt-5'>
            <h5 className='text text-light border-bottom pb-3 w-25'>SUIVER-NOUS</h5>
            <div className='flex items-center gap-2'>
                <a href="" style={{padding:'8px'}}><i class="bi bi-facebook text-light"></i></a>
                <a href="" style={{padding:'8px'}}><i class="bi bi-twitter-x text-light "></i></a>
                <a href="" style={{padding:'8px'}}><i class="bi bi-instagram text-light"></i></a>
            </div>
            </div>
            <hr className='text-light'/>
            <div className="mt-5 flex sm:flex-col gap-8 ">
            <h5 className='text text-light border-bottom pb-3 w-25'>Mode de painements</h5>
            <div className='flex items-center gap-2 mt-5' style={{display:'flex'}}>
                <div className='bg-white  h-[50px]  flex justify-center items-center  ' style={{width:'77px',}}>
                <img src={require('../images/cmi.png')} alt="" width={70} height={30}/>

                </div>
                
                <div className='bg-white  h-[50px]  flex justify-center items-center  ' style={{width:'77px',}}>
                <img src={require('../images/visa.png')} alt="" width={70} height={30}/>

                </div>
                <div className='bg-white  h-[50px]  flex justify-center items-center  ' style={{width:'77px',}}>
                <img src={require('../images/mastercard.png')} alt="" width={70} height={30}/>

                </div>
                <div className='bg-white  h-[50px]  flex justify-center items-center  ' style={{width:'77px',}}>
                <img src={require('../images/cashplus.png')} alt="" width={70} height={30}/>

                </div>
            </div>
            
            </div>
            <div className='mt-5'>
            <h5 className='text text-light border-bottom pb-3 w-25 '>MODE DE LIVRAISON</h5>
            <div className='flex items-center gap-2' style={{display:'flex'}}>
            <div className='bg-white  h-[50px]  flex justify-center items-center  mt-5' style={{width:'77px',}}>
                <img src={require('../images/cathedis.png')} alt="" width={70} height={30}/>

                </div>
                <div className='bg-white  h-[50px]  flex justify-center items-center  mt-5' style={{width:'77px',}}>
                <img src={require('../images/aramex-logo.jpg')} alt="" width={70} height={30}/>

                </div>
                <div className='bg-white  h-[50px]  flex justify-center items-center  mt-5' style={{width:'77px',}}>
                <img src={require('../images/dhl.png')} alt="" width={70} height={30}/>

                </div>
            </div>
            
            </div>
            <hr className='text-light'/>
            <div className='py-6 text-center text-[#D9D9D9] text-[13px] font-semibold mt-5 '>
                <p className='text-light'>© 2023 Rajashop - Votre source de produits de qualité.</p>
            </div>
            </div>
        </div>
        
        </div>
    )
}