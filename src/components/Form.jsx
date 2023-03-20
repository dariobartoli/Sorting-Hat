import React from 'react'
import { useState } from 'react'
import 'animate.css'


export const Form = () => {
  const [optionA, setOptionA] = useState("")
  const [optionB, setOptionB] = useState("")
  const [optionC, setOptionC] = useState("")
  const [optionD, setOptionD] = useState("")
  const [optionE, setOptionE] = useState("")
  const [optionF, setOptionF] = useState("")
  const [optionG, setOptionG] = useState("")
  const [optionH, setOptionH] = useState("")
  const [optionI, setOptionI] = useState("")
  const [optionJ, setOptionJ] = useState("")
  const [optionK, setOptionK] = useState("")
  const [optionL, setOptionL] = useState("")
  const [optionM, setOptionM] = useState("")
  const [optionN, setOptionN] = useState("")
  const [optionO, setOptionO] = useState("")
  const [optionP, setOptionP] = useState("")
  const [optionQ, setOptionQ] = useState("")
  const [optionR, setOptionR] = useState("")
  const [resultado, setResultado] = useState("")
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(true)



  const handleOptionA = (e) => setOptionA(e.target.value)
  const handleOptionB = (e) => setOptionB(e.target.value)
  const handleOptionC = (e) => setOptionC(e.target.value)
  const handleOptionD = (e) => setOptionD(e.target.value)
  const handleOptionE = (e) => setOptionE(e.target.value)
  const handleOptionF = (e) => setOptionF(e.target.value)
  const handleOptionG = (e) => setOptionG(e.target.value)
  const handleOptionH = (e) => setOptionH(e.target.value)
  const handleOptionI = (e) => setOptionI(e.target.value)
  const handleOptionJ = (e) => setOptionJ(e.target.value)
  const handleOptionK = (e) => setOptionK(e.target.value)
  const handleOptionL = (e) => setOptionL(e.target.value)
  const handleOptionM = (e) => setOptionM(e.target.value)
  const handleOptionN = (e) => setOptionN(e.target.value)
  const handleOptionO = (e) => setOptionO(e.target.value)
  const handleOptionP = (e) => setOptionP(e.target.value)
  const handleOptionQ = (e) => setOptionQ(e.target.value)
  const handleOptionR = (e) => setOptionR(e.target.value)

  const send = () => {
    const array = []
    array.push(optionA, optionB, optionC, optionD, optionE, optionF, optionG, optionH, optionI, optionJ, optionK, optionL, optionM, optionN, optionO, optionP, optionQ, optionR)
    if(optionA === "" || optionB === "" || optionC === "" || optionD === "" || optionE === "" || optionF === "" || optionG === "" || optionH === "" || optionI === "" || 
    optionJ === "" || optionK === "" || optionL === "" || optionM === "" || optionN === "" || optionO === "" || optionP === "" || optionQ === "" || optionR === ""){
      return setShow2(!show2)
    } 
    const gryffindor = array.filter(item => item === "gry")
    const slytherin = array.filter(item => item === "sly")
    const hufflepuff = array.filter(item => item === "huf")
    const ravenclaw = array.filter(item => item === "rav")
    setShow(!show)
    if(gryffindor.length > slytherin.length && gryffindor.length > hufflepuff.length && gryffindor.length > ravenclaw.length){
      return setResultado("¡GRYFFINDOR!");
    }else if(slytherin.length > gryffindor.length && slytherin.length > hufflepuff.length && slytherin.length > ravenclaw.length){
      return setResultado("¡SLYTHERIN!");
    }else if(hufflepuff.length > slytherin.length && hufflepuff.length > gryffindor.length && hufflepuff.length > ravenclaw.length){
      return setResultado("¡HUFFLEPUFF!");
    }else if(ravenclaw.length > slytherin.length && ravenclaw.length > gryffindor.length && ravenclaw.length > hufflepuff.length){
      return setResultado("¡RAVENCLAW!");
    }else{
      if(gryffindor.length == slytherin.length && gryffindor.length > 0 && slytherin.length >0){
        const random = Math.random().toFixed()
        if(random == 0){
          return setResultado("¡GRYFFINDOR!")
        }else if(random == 1){
          return setResultado("¡SLYTHERIN!")
        }
      }if(gryffindor.length == hufflepuff.length && gryffindor.length > 0 && hufflepuff.length >0){
        const random = Math.random().toFixed()
        if(random == 0){
          return setResultado("¡GRYFFINDOR!")
        }else if(random == 1){
          return setResultado("¡HUFFLEPUFF!")
        }
      }if(gryffindor.length == ravenclaw.length && gryffindor.length > 0 && ravenclaw.length >0){
        const random = Math.random().toFixed()
        if(random == 0){
          return setResultado("¡GRYFFINDOR!")
        }else if(random == 1){
          return setResultado("¡RAVENCLAW!")
        }
      }if(slytherin.length == hufflepuff.length && slytherin.length > 0 && hufflepuff.length >0){
        const random = Math.random().toFixed()
        if(random == 0){
          return setResultado("¡HUFFLEPUFF!")
        }else if(random == 1){
          return setResultado("¡SLYTHERIN!")
        }
      }if(slytherin.length == ravenclaw.length && slytherin.length > 0 && ravenclaw.length >0){
        const random = Math.random().toFixed()
        if(random == 0){
          return setResultado("¡RAVENCLAW!")
        }else if(random == 1){
          return setResultado("¡SLYTHERIN!")
        }
      }if(hufflepuff.length == ravenclaw.length && ravenclaw.length > 0 && hufflepuff.length >0){
        const random = Math.random().toFixed()
        if(random == 0){
          return setResultado("¡RAVENCLAW!")
        }else if(random == 1){
          return setResultado("¡HUFFLEPUFF!")
        }
      }else{
        const random = Math.random() * 3
        const randomEntero = random.toFixed()
        if(randomEntero == 0){
          return setResultado("¡GRYFFINDOR!")
        }if(randomEntero == 1){
          return setResultado("¡SLYTHERIN!")
        }if(randomEntero == 2){
          return setResultado("¡HUFFLEPUFF!")
        }if(randomEntero == 3){
          return setResultado("¡RAVENCLAW!")
        }
      }
    }
  }

  const closeModal = ()=>{
    setShow(!show);
    window.location.reload()
  }
  const closeModalError = ()=>{
    setShow2(!show2);
  }


  return (
    <>
      <div className="form__container">
        <form onChange={handleOptionA} className="form__box">
          <fieldset className='field__container'>
            <legend>Digamos que tiene un examen la próxima semana, ¿cómo se va a preparar?</legend>
            <img src="./assets/image/optionA.jpg" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-a" id='a1' value="gry"/>
              <label htmlFor="a1">Reviso mis apuntes y estudio solo en casa</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-a" id='a2' value="huf"/>
              <label htmlFor="a2">Estudio un poquito cada día de la semana pero no me estreso porque sé que he prestado atención en clase entonces me va a ir bien</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-a" id='a3' value="rav"/>
              <label htmlFor="a3">Le digo a mis compañeros que nos reunamos a estudiar juntos en la biblioteca</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-a" id='a4' value="sly"/>
              <label htmlFor="a4">Dejo todo para última hora y el día antes me trasnocho estudiando con uno o dos amigos</label>
            </div>
          </fieldset> 
        </form>

        <form onChange={handleOptionB} className="form__box">
          <fieldset className='field__container'>
            <legend>¿Qué palabra te describe mejor?</legend>
            <img src="./assets/image/optionB.jpg" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-b" id="b1" value="gry"/>
              <label htmlFor="b1">Valentía</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-b" id="b4" value="rav"/>
              <label htmlFor="b4">Inteligencia</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-b" id="b2" value="huf"/>
              <label htmlFor="b2">Lealtad</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-b" id="b3" value="sly"/>
              <label htmlFor="b3">Liderazgo</label>
            </div>
          </fieldset>
        </form>
        
        <form onChange={handleOptionC} className="form__box">
          <fieldset className='field__container'>
            <legend>¿Qué opinas de los muggles?</legend>
            <img src="./assets/image/optionC.jpg" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-c" id="c1" value="gry"/>
              <label htmlFor="c1">Están bien en su mundo</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-c" id="c3" value="sly"/>
              <label htmlFor="c3">No deberían de existir</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-c" id="c2" value="huf"/>
              <label htmlFor="c2">Me dan igual</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-c" id="c4" value="rav"/>
              <label htmlFor="c4">Somos superiores a ellos</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionD} className="form__box">
          <fieldset className='field__container'>
            <legend>¿Le temes al Señor Oscuro?</legend>
            <img src="./assets/image/optionD.webp" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-d" id="d4" value="rav"/>
              <label htmlFor="d4">No, pero no me enfrentaría a él</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-d" id="d2" value="huf"/>
              <label htmlFor="d2">Sí, me da mucho miedo</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-d" id="d3" value="sly"/>
              <label htmlFor="d3">Sí, por eso hay que hacer lo que diga</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-d" id="d1" value="gry"/>
              <label htmlFor="d1">No, hay que defendernos de él</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionE} className="form__box">
          <fieldset className='field__container'>
            <legend>¿A cuál de estos personajes admiras?</legend>
            <img src="./assets/image/optionE.avif" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-e" id="e2" value="huf"/>
              <label htmlFor="e2">Cedric Diggory</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-e" id="e1" value="gry"/>
              <label htmlFor="e1">Minerva McGonagall</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-e" id="e4" value="rav"/>
              <label htmlFor="e4">Alastor Moody</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-e" id="e3" value="sly"/>
              <label htmlFor="e3">Severus Snape</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionF} className="form__box">
          <fieldset className='field__container'>
            <legend>¿A qué casa crees que el Sombrero Seleccionador te habría mandado?</legend>
            <img src="./assets/image/optionF.jpg" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-f" id="f2" value="huf"/>
              <label htmlFor="f2">Hufflepuff</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-f" id="f3" value="sly"/>
              <label htmlFor="f3">Slytherin</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-f" id="f1" value="gry"/>
              <label htmlFor="f1">Gryffindor</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-f" id="f4" value="rav"/>
              <label htmlFor="f4">Ravenclaw</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionG} className="form__box">
          <fieldset className='field__container'>
            <legend>¿De que seria tu patronus?</legend>
            <img src="./assets/image/optionG.jpg" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-g" id="g1" value="gry"/>
              <label htmlFor="g1">Ciervo</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-g" id="g3" value="sly"/>
              <label htmlFor="g3">Oso</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-g" id="g4" value="rav"/>
              <label htmlFor="g4">León</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-g" id="g2" value="huf"/>
              <label htmlFor="g2">Águila</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionH} className="form__box">
          <fieldset className='field__container'>
            <legend>¿En qué materia serías excelente?</legend>
            <img src="./assets/image/optionH.avif" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-h" id="h4" value="rav"/>
              <label htmlFor="h4">Astronomía</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-h" id="h2" value="huf"/>
              <label htmlFor="h2">Herbología</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-h" id="h1" value="gry"/>
              <label htmlFor="h1">Defensa contra las artes oscuras</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-h" id="h3" value="sly"/>
              <label htmlFor="h3">Encantamientos</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionI} className="form__box">
          <fieldset className='field__container'>
            <legend>¿Quién sería tu profesor favorito?</legend>
            <img src="./assets/image/optionI.webp" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-i" id="i1" value="gry"/>
              <label htmlFor="i1">Rubeus Hagrid</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-i" id="i3" value="sly"/>
              <label htmlFor="i3">Horace Slughorn</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-i" id="i2" value="huf"/>
              <label htmlFor="i2">Quirinus Quirrell</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-i" id="i4" value="rav"/>
              <label htmlFor="i4">Remus Lupin</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionJ} className="form__box">
          <fieldset className='field__container'>
            <legend>Si su habitación en Hogwarts se está quemando y pudiera rescatar solo una cosa, ¿cuál sería?</legend>
            <img src="./assets/image/optionJ.webp" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-j" id="j1" value="gry"/>
              <label htmlFor="j1">A su mascota</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-j" id="j2" value="huf"/>
              <label htmlFor="j2">Las fotos que tiene con sus amigos</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-j" id="j3" value="sly"/>
              <label htmlFor="j3">Una reliquia familiar que ha pasado de generación en generación</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-j" id="j4" value="rav"/>
              <label htmlFor="j4">Su libro favorito o su ordenador</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionK} className="form__box">
          <fieldset className='field__container'>
            <legend>Si le dan un pedazo de papel, ¿qué hace con él?</legend>
            <img src="./assets/image/optionK.jpg" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-k" id="k2" value="huf"/>
              <label htmlFor="k2">Dibuja</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-k" id="k1" value="gry"/>
              <label htmlFor="k1">Un avioncito de papel</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-k" id="k4" value="rav"/>
              <label htmlFor="k4">Escribe</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-k" id="k3" value="sly"/>
              <label htmlFor="k3">Lo rompe en muchos pedacitos</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionL} className="form__box">
          <fieldset className='field__container'>
            <legend>Si en una clase los ponen a hacer un trabajo en grupo, ¿que harías?</legend>
            <img src="./assets/image/optionL.jpg" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-l" id="l1" value="gry"/>
              <label htmlFor="l1">Hace de todo un poquito</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-l" id="l3" value="sly"/>
              <label htmlFor="l3">Lo minimo posible</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-l" id="l4" value="rav"/>
              <label htmlFor="l4">Se pone a cargo de todo, organiza, asigna roles y termina casi haciéndolo todo usted</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-l" id="l2" value="huf"/>
              <label htmlFor="l2">Investiga y escribe gran parte del trabajo pero deja que alguien mas lo presente</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionM} className="form__box">
          <fieldset className='field__container'>
            <legend>¿Haría trampa en un examen?</legend>
            <img src="./assets/image/optionM.webp" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-m" id="m1" value="gry"/>
              <label htmlFor="m1">Tratas de no hacerlo siempre</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-m" id="m2" value="huf"/>
              <label htmlFor="m2">Si ayudar a sus amigos es hacer trampas, entonces si</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-m" id="m3" value="sly"/>
              <label htmlFor="m3">Si, todo el mundo hace trampas. Hacer trampas sin ser atrapado es muy inteligente</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-m" id="m4" value="rav"/>
              <label htmlFor="m4">Nunca</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionN} className="form__box">
          <fieldset className='field__container'>
            <legend>¿Qué cosa te fastidia más?</legend>
            <img src="./assets/image/optionN.webp" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-n" id="n3" value="sly"/>
              <label htmlFor="n3">Que la gente no sea leal</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-n" id="n2" value="huf"/>
              <label htmlFor="n2">Que la gente se indigne por cualquier cosa</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-n" id="n4" value="rav"/>
              <label htmlFor="n4">Que la gente confunda ay, hay, ahí</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-n" id="n1" value="gry"/>
              <label htmlFor="n1">Que la gente se aproveche de otra gente</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionO} className="form__box">
          <fieldset className='field__container'>
            <legend>¿Quién habría sido tu mejor amigo/a?</legend>
            <img src="./assets/image/optionO.avif" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-o" id="o3" value="sly"/>
              <label htmlFor="o3">Draco Malfoy</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-o" id="o4" value="rav"/>
              <label htmlFor="o4">Luna Lovegood</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-o" id="o2" value="huf"/>
              <label htmlFor="o2">Neville Longbottom</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-o" id="o1" value="gry"/>
              <label htmlFor="o1">Harry Potter</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionP} className="form__box">
          <fieldset className='field__container'>
            <legend>¿Qué actividad habrías preferido hacer en tu estancia en la escuela?</legend>
            <img src="./assets/image/optionP.jpg" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-m" id="p1" value="gry"/>
              <label htmlFor="p1">Estar en el equipo de quidditch</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-m" id="p4" value="rav"/>
              <label htmlFor="p4">Leer en la biblioteca</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-m" id="p2" value="huf"/>
              <label htmlFor="p2">Clases de herbología</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-m" id="p3" value="sly"/>
              <label htmlFor="p3">Hacer bromas a los profesores</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionQ} className="form__box">
          <fieldset className='field__container'>
            <legend>¿Cuál de estos hechizos usarías más?</legend>
            <img src="./assets/image/optionQ.avif" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-q" id="q1" value="gry"/>
              <label htmlFor="q1">Expelliarmus</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-q" id="q3" value="sly"/>
              <label htmlFor="q3">Avada Kedavra</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-q" id="q4" value="rav"/>
              <label htmlFor="q4">Geminio</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-q" id="q2" value="huf"/>
              <label htmlFor="q2">Ascendio</label>
            </div>
          </fieldset>
        </form>

        <form onChange={handleOptionR} className="form__box">
          <fieldset className='field__container'>
            <legend>¿Qué posición de Quidditch te gustaria jugar?</legend>
            <img src="./assets/image/optionR.webp" className='imagen'/>
            <div className='check__container'>
              <input type="radio" name="opcion-r" id="r2" value="huf"/>
              <label htmlFor="r2">Guardián</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-r" id="r3" value="sly"/>
              <label htmlFor="r3">Golpeador</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-r" id="r1" value="gry"/>
              <label htmlFor="r1">Cazador</label>
            </div>
            <div className='check__container'>
              <input type="radio" name="opcion-r" id="r4" value="rav"/>
              <label htmlFor="r4">Buscador</label>
            </div>
          </fieldset>
        </form>

        <button onClick={send} className="button__form">enviar</button>


        <div className={`modal ${show ? "" : "modalShow"}`}>
          <div className='modal__container'>
            <span className="material-symbols-outlined close" onClick={closeModal}>close</span>
            <img src="./assets/image/sorting-hat.gif" className='image__modal'/>
            <p>Haz sido seleccionado para la casa:</p>
            <h2 className='animate__animated animate__rubberBand animate__infinite infinite'>{resultado}</h2>
            {resultado === "¡GRYFFINDOR!" && (<img src="./assets/image/gryffindor.png" className='image__modal3'/>)}
            {resultado === "¡SLYTHERIN!" && (<img src="./assets/image/slytherin.png" className='image__modal3'/>)}
            {resultado === "¡HUFFLEPUFF!" && (<img src="./assets/image/hufflepuff.png" className='image__modal3'/>)}
            {resultado === "¡RAVENCLAW!" && (<img src="./assets/image/ravenclaw.png" className='image__modal3'/>)}
            <button onClick={closeModal} className="button__form">Volver</button>
          </div>
        </div>



        <div className={`modal ${show2 ? "" : "modalShow"}`}>
          <div className='modal__container'>
            <span className="material-symbols-outlined close" onClick={closeModalError}>close</span>
            <img src="./assets/image/advertencia.png" className='image__modal2'/>
            <p>Por favor complete todos los campos del cuestionario</p>
            <button onClick={closeModalError} className="button__form">Volver</button>
          </div>
        </div>
      </div>
    </>
  )
}
