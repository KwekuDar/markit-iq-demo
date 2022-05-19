import { useState } from 'react';
import './public/css/faq.css';
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

function FAQ() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i);
  }

  return (
    <div className='faq-wrapper'>
      <div className='faq-accordion'>
        {data.map((item, i) => (
          <div className='item'>
            <div className='title' onClick={() => toggle(i)}>
              <h4>{item.question}</h4>
              <span>{selected === i ? <RiArrowDropUpLine size='40px'/> : <RiArrowDropDownLine size='40px'/>}</span>
            </div>
            <div className={selected === i ? 'faq-content show' : 'faq-content'}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
	{
		question: 'What is a lorem ipsum?',
		answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nulla quaerat perspiciatis quasi nihil sequi, ipsum quibusdam dolor laborum id pariatur odio obcaecati distinctio dicta fugiat deleniti sunt aliquam doloremque.',
	},
  {
		question: 'How can I lorem ipsum?',
		answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Veniam, at minus, quo modi assumenda incidunt sed, officiis officia asperiores rem quas dolor possimus excepturi facere similique et quod omnis unde aspernatur tempore totam corporis illo. Vel, illo. Numquam, reiciendis, dicta.',
	},
  {
		question: 'How should I lorem ipsum?',
		answer: 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Maxime asperiores expedita corrupti dolore repellendus nesciunt minus quibusdam quidem eos culpa placeat magnam accusantium fugit excepturi quas ipsum commodi repudiandae ex at, ducimus, enim suscipit tempore vero maiores. Fugiat hic nulla est odio, maxime voluptas dignissimos quod blanditiis. Odit, eos, veniam.',
	},
  {
		question: 'Who should I lorem ipsum if I need to lorem ipsum?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit delectus sed quidem harum quam eaque illum autem id eveniet laborum!',
	},
 
  {
		question: 'How soon can I see lorem ipsum?',
		answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia voluptates voluptate rem sed, magnam iusto saepe earum minima eaque ipsam quisquam at atque est dolorum quam porro ipsa illum numquam iste consequatur aspernatur sit laudantium labore repellendus. Reprehenderit, numquam.',
	},
  {
		question: 'How much lorem ipsums does lorem ipsum cost?',
		answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Quibusdam adipisci quia illo cupiditate aliquam, quasi eum aperiam nam dolore sint unde maxime. Porro voluptatum excepturi exercitationem asperiores animi soluta sequi eius eveniet fugit minus ipsa tempore, reiciendis enim nostrum ullam perferendis? Sunt nostrum, facilis? Aliquam ut deleniti libero consequuntur ad!',
	},
  {
		question: 'How many lorem ipsums can I lorem ipsum before I lorem ipsum?',
		answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quia officiis perspiciatis dolorem eos nesciunt temporibus velit, tenetur dolorum cum.',
	},
]

export default FAQ;