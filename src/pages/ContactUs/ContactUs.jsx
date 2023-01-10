import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useBreakpoint } from '../../hooks/useBreakpoint';
import '../../css/App.css';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { Header } from '../../components/Header/Header';
import { CopyrightFooter } from '../../components/CopyrightFooter/CopyrightFooter';

// Outside Click (Hook)
import { useOnClickOutside } from 'usehooks-ts'

// Conditional Rendering Transition Lib
import { useTransition, animated } from '@react-spring/web';
import { Chat } from '../../components/Chat/Chat';

export const ContactUs = () => {

  const breakpoint = useBreakpoint();

  const [isBgVisible, setIsBgVisible] = useState(false);
  useEffect(() => {
    setIsBgVisible(true);
  }, [])

  // Outside Click (Variable)
  const refContainer = useRef(null);

  const handleClickOutside = () => {
    setShowExpansion(false);
  }

  useOnClickOutside(refContainer, handleClickOutside)

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

  // Yup Validation
  const schema = yup.object({
    department: yup.string().required(),
    subject: yup.string().required(),
    model: yup.string().required(),
    quantity: yup.number().required(),
  }).required();

  // Hook Form Controller
  const {
    watch,
    register,
    setValue,
    getValues,
    trigger,
    resetField,
    clearErrors,
    formState: { errors }
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    trigger();
  }, [trigger]);

  // Whatsapp //

  const whatsappNumber = "5584981283798"

  const whatsappAdress = breakpoint == "notebook" || breakpoint == "desktop" ?
  `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  const [whatsappMessage, setWhatsappMessage] = useState('');
  useEffect(() => {
    setWhatsappMessage(
      getValues("department") === "Pedido de toner" ?
      `Setor: ${getValues("department")}\nModelo do Toner/Impressora: ${getValues("model")}\nQuantidade: ${getValues("quantity")}` :
      getValues("department") === "Problemas técnicos" ?
      `Setor: ${getValues("department")}\nModelo da Impressora: ${getValues("model")}\nProblema apresentado: ${getValues("subject")}` :
      getValues("department") === "Setor financeiro" ?
      `Setor: ${getValues("department")}\nAssunto: ${getValues("subject")}` :
      getValues("department") === "Locação de impressoras" ?
      `Setor: ${getValues("department")}` :
      ''
    );
  }, [watch("department"), watch("subject"), watch("model"), watch("quantity")])

  // Conditional Button
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  useEffect(() => {
    if(getValues("department") === "Pedido de toner") {
      errors.model || errors.quantity ?
      setIsButtonDisabled(true) :
      setIsButtonDisabled(false)
    } else if ((getValues("department") === "Problemas técnicos")) {
      errors.model || errors.subject ?
      setIsButtonDisabled(true) :
      setIsButtonDisabled(false)
    } else if ((getValues("department") === "Setor financeiro")) {
      errors.subject ?
      setIsButtonDisabled(true) :
      setIsButtonDisabled(false)
    } else if ((getValues("department") === "Locação de impressoras")) {
      setIsButtonDisabled(false)
    }
  }, [watch()])

  // Clear fields on department changing
  useEffect(() => {
    setValue("subject", '');
    setValue("model", '');
    setValue("quantity", '');
    trigger();
  }, [watch("department")])

  return (
    <>
      <Header />
      <div className="contact-us-container">
        <header>
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
        </header>
          
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
          {
            getValues("department") === "Problemas técnicos" ?
            <>
              <div className="form-input-wp">
                <TextField 
                  id="subject"
                  label="Modelo da impressora" 
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
                  label="Informe o problema apresentado" 
                  required
                  color="success"
                  variant="standard"
                  aria-invalid={errors.subject ? "true" : "false"} 
                  {...register("subject")}
                />
              </div>
            </> :
            undefined
          }
          {
            getValues("department") === "Setor financeiro" ?
            <div className="form-input-wp wide-input">
              <TextField 
                id="subject"
                label="Assunto"
                required
                multiline
                maxRows={4}
                color="success"
                variant="standard"
                aria-invalid={errors.subject ? "true" : "false"} 
                {...register("subject")}
              />
            </div> :
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