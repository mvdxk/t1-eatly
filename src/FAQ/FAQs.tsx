import React, {useState} from 'react';
import './FAQs.css';
import vector from './images/vector.svg';
import { IItem } from './types';

const FAQs = () => {
    const questionItem: IItem[] = [
        {id: 1, title: 'How long does delivery take?'},
        {id: 2, title: 'How Does It Work ?'},
        {id: 3, title: 'How does your food delivery service work?'},
        {id: 4, title: 'What payment options do you accept?'},
        {id: 5, title: 'Do you offer discounts or promotions?'},
    ]
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const [openId, setOpenId] = useState<number>(1)

    const toggle = (id: number) => {
        if (openId === id && isOpen) {
            setIsOpen(false)
            setOpenId(0)
        } else {
            setIsOpen(true)
            setOpenId(id)
        }
    }

    return (
        <div className={'faqs'}>
            <div className={'faqs__title-wrapper'}>
                <h2 className={'faqs__title'}>Frequently Asked</h2>
                <span className={'faqs__title faqs__title--span'}>Questions</span>
                <img className={'faqs__title-img'} alt={'vector'} src={vector}/>
            </div>
            <div className={'faqs__accordion'}>
                {questionItem.map((item: IItem) =>
                    <div className={`faqs__accordion-item ${openId === item.id && isOpen ? 'active' : ''}`}>
                        <div className={'faqs__accordion-item-header'}>
                            <h3 className={'faqs__accordion-item-header-title'}>{item.title}</h3>
                            <div
                                className={'faqs__accordion-item-header-icon'}
                                onClick={() => toggle(item.id)}
                            >
                                <div className={'faqs__accordion-item-header-icon-symbol'}></div>
                                <div className={'faqs__accordion-item-header-icon-symbol'}></div>
                            </div>
                        </div>
                        <div className={'faqs__accordion-item-body'}>
                        {(isOpen && openId === item.id ) && (
                            <>
                                <p>You Can Get Information By Contacting Our Support Team Have 24/7 Service.</p>
                                <p>What’s The Difference Between Free And Paid Plan ?</p>
                            </>
                        )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQs;
