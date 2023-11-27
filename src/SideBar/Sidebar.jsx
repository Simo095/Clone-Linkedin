import { Button, Card } from "react-bootstrap";
import { BsPencil, BsThreeDots } from "react-icons/bs";
import user from "./img/user.png";
import logoCompany from "./img/logoComp.png";
import UserCards from "./UserCards";
import linkedinLogo from "./img/linkedin-logo.png";
import imgVideo1 from "./img/vid1.png";
import imgVideo2 from "./img/vid2.png";
import imgVideo3 from "./img/vid3.png";

import { Link } from "react-bootstrap-icons";
import PromoCard from "./PromoCard";
import { useEffect, useState } from "react";
import { usersListHandleShow } from "../redux/action";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const [userImg, setUserImg] = useState("");
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        setUserImg(data.image);
      } else {
        throw new Error(resp.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className='card-setting p-3 rounded-2'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex flex-column align-items-start'>
            <span>Lingua del profilo</span>
            <p>italiano</p>
          </div>
        </div>

        <hr className='p-0' />

        <div className='d-flex justify-content-between '>
          <div className='d-flex flex-column align-items-start'>
            <span>Public profile & URL</span>
            <p>www.linkedin.com</p>
          </div>
        </div>
      </div>

      <div className='card p-3'>
        <div className='d-flex align-items-center justify-content-end'>
          <span className='me-2'>annuncio</span>
          <BsThreeDots />
        </div>
        <div>
          <span>scopri le ultime offerte di lavoro e notizie</span>
          <div className='d-flex promo-header justify-content-center gap-3 my-2'>
            <img src={userImg ? userImg : user} alt='user img' className='img-fluid object-fit-cover rounded-circle' />
            <img src={logoCompany} alt='company img' className='img-fluid object-fit-cover w-100' />
          </div>
          <p className='mb-2'>Vasil, scopri le opportunità offerte da Wyser!</p>
          <Button variant='outline-primary' className='rounded-4 py-1'>
            Segui
          </Button>
        </div>
      </div>

      <Card className='card-users p-3 text-start'>
        <p className='mb-2'>Persone che potresti conoscere</p>
        <UserCards userMax={5} />
        <div className='d-flex justify-content-center '>
          <Button className='bg-transparent text-black border-0' onClick={() => usersListHandleShow(dispatch)}>
            Mostra tutto
          </Button>
        </div>
      </Card>

      <div className='card p-3 text-start'>
        <div className='d-flex align-items-center'>
          <img src={linkedinLogo} alt='linkedin-logo' width={20} />
          <span className='text-secondary ms-1'>LEARNING</span>
        </div>
        <p> Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore.</p>
        <div className='d-flex mt-2 mb-1 video-card'>
          <img src={imgVideo1} className='img-fluid me-1' alt='video' width={100} height={70} />
          <div className='p-1'>Outlook: gestione efficiente della posta</div>
        </div>{" "}
        <div className='d-flex mt-2 video-card'>
          <img src={imgVideo2} className='img-fluid me-1' alt='video' width={100} height={70} />
          <div className='p-1'>Imparare python</div>
        </div>{" "}
        <div className='d-flex mt-2 video-card'>
          <img src={imgVideo3} className='img-fluid me-1' alt='video' width={100} height={70} />
          <div className='p-1'>Formazione esenziale su javascript</div>
        </div>
        <div className='d-flex justify-content-center pt-2'>
          <Link to={"/"} className='text-secondary'>
            Mostra tutto
          </Link>
        </div>
      </div>
      <PromoCard />
    </>
  );
};

export default Sidebar;
