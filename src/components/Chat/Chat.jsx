import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { UserCircle } from 'phosphor-react';

import { useBreakpoint } from '../../hooks/useBreakpoint';

import totalLogo from '../../assets/totalink-logo.png';
import '../../css/App.css';

export const Chat = () => {

  const breakpoint = useBreakpoint();

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
    <div className="chat-container">
      <div className="header">
        <UserCircle size={56} color="#ffffff" weight="duotone" />
        <span className="">Fale conosco</span>
      </div>
      <main>
        <div className="chat-row answer">
          <span>Com qual setor você deseja falar?</span>
          <div className="answer-avatar">
            <img src={totalLogo} alt="Total Ink logo" />
          </div>
        </div>

        <div className="chat-row question">
          <UserCircle size={38} color="#ffffff" weight="duotone" />
          <select 
            name="department" 
            id="department"  
            {...register("department")}
          >
            <option value="" disabled>Selecione uma opção</option>
            <option value="Pedido de toner">Pedido de toners</option>
            <option value="Problemas técnicos">Problemas técnicos</option>
            <option value="Setor financeiro">Setor financeiro</option>
            <option value="Locação de impressoras">Locação de impressoras</option>
          </select>
        </div>

        {/* Condition Toner */}
        {
          getValues("department") === "Pedido de toner" ?
          <>
            <div className="chat-row answer">
              <span>Precisamos saber, por favor, qual o modelo do toner ou impressora.</span>
              <div className="answer-avatar">
                <img src={totalLogo} alt="Total Ink logo" />
              </div>
            </div>

            <div className="chat-row question">
              <UserCircle size={38} color="#ffffff" weight="duotone" />
              <input 
                id="subject"
                label="Modelo do toner ou da impressora" 
                required
                aria-invalid={errors.subject ? "true" : "false"} 
                {...register("model")}
              />
            </div>

            <div className="chat-row answer">
              <span>Agora nos diga quantos você está precisando.</span>
              <div className="answer-avatar">
                <img src={totalLogo} alt="Total Ink logo" />
              </div>
            </div>

            <div className="chat-row question">
              <UserCircle size={38} color="#ffffff" weight="duotone" />
              <input 
                id="subject"
                label="Quantidade" 
                required
                aria-invalid={errors.subject ? "true" : "false"} 
                {...register("quantity")}
              />
            </div>
          </> :
          undefined
        }

        {/* Condition Technical problems */}
        {
          getValues("department") === "Problemas técnicos" ?
          <>
            <div className="chat-row question">
              <UserCircle size={38} color="#ffffff" weight="duotone" />
              <input 
                id="subject"
                label="Modelo da impressora" 
                required
                color="success"
                variant="standard"
                aria-invalid={errors.subject ? "true" : "false"} 
                {...register("model")}
              />
            </div>
            <div className="chat-row question">
              <UserCircle size={38} color="#ffffff" weight="duotone" />
              <input 
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

        {/* Condition Financial */}
        {
          getValues("department") === "Setor financeiro" ?
          <div className="chat-row question">
            <UserCircle size={38} color="#ffffff" weight="duotone" />
            <input 
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
      </main>
      <div className="footer">
        <input type="text" placeholder="Insira sua mensagem" />
      </div>
    </div>
  )
}