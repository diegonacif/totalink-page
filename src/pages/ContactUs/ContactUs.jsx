import { useEffect, useState, useRef } from 'react';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { Header } from '../../components/Header/Header';
import { CopyrightFooter } from '../../components/CopyrightFooter/CopyrightFooter';

// Conditional Rendering Transition Lib
import { useTransition, animated } from '@react-spring/web';
import { Chat } from '../../components/Chat/Chat';

import '../../css/App.css';

export const ContactUs = () => {


  const [isBgVisible, setIsBgVisible] = useState(false);
  useEffect(() => {
    setIsBgVisible(true);
  }, [])

  // // Outside Click (Variable)
  // const refContainer = useRef(null);

  // const handleClickOutside = () => {
  //   setShowExpansion(false);
  // }

  // useOnClickOutside(refContainer, handleClickOutside)

  // Modal Animation
  const bgInTransition = useTransition(isBgVisible, {
    from: { scale: 1.1, opacity: 0.95 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 1.1, opacity: 0.95 },
    config: {duration: 700},
    // delay: 300
  });
  const textInTransition = useTransition(isBgVisible, {
    from: { scale: 0.85, opacity: 0.95 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 0.85, opacity: 0.95 },
    config: {duration: 700},
    // delay: 300
  });

  return (
    <>
      <Header />
      <div className="contact-us-container">
        {/* <header>
          {
            bgInTransition(
              (styles, item) => item &&
              <animated.div className="header-bg" style={styles}></animated.div>
            )
          }
          {
            textInTransition(
              (styles, item) => item &&
              <animated.h1 style={styles}>Entre em contato através do nosso WhatsApp. Insira as informações abaixo para que possamos atendê-lo da melhor forma.</animated.h1>
            )
          }
        </header> */}
          
        {/* <form>
          <div className="form-input-wp input-select">
            <TextField 
              label="Setor"
              select 
              required
              color="success"
              variant="standard"
              defaultValue={""} 
              {...register("department")}
            >
              <MenuItem value="" disabled>Selecione uma opção</MenuItem>
              <MenuItem value="Pedido de toner">Pedido de toners</MenuItem>
              <MenuItem value="Problemas técnicos">Problemas técnicos</MenuItem>
              <MenuItem value="Setor financeiro">Setor financeiro</MenuItem>
              <MenuItem value="Locação de impressoras">Locação de impressoras</MenuItem>
            </TextField>
          </div>
          {
            getValues("department") === "Pedido de toner" ?
            <>
              <div className="form-input-wp">
                <TextField 
                  id="subject"
                  label="Modelo do toner ou da impressora" 
                  required
                  color="success"
                  variant="standard"
                  aria-invalid={errors.subject ? "true" : "false"} 
                  {...register("model")}
                />
              </div>
              <div className="form-input-wp">
                <TextField 
                  id="subject"
                  label="Quantidade" 
                  required
                  color="success"
                  variant="standard"
                  aria-invalid={errors.subject ? "true" : "false"} 
                  {...register("quantity")}
                />
              </div>
            </> :
            undefined
          }
          
          <button 
            onClick={() => {window.open(whatsappAdress + encodeURI(whatsappMessage))}}
            disabled={isButtonDisabled}
          >
            Enviar mensagem
          </button>
        </form> */}
        <Chat />
        <CopyrightFooter />
      </div>
    </>
  )
}