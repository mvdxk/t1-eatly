import React, {FC} from 'react';
import Star from "../../images/Star.svg"
import BookMark from "../../images/Bookmark.svg"

interface IProps {
    img: string
    title: string
    tag: string
    date: string
    lazyLoading?: boolean
    evaluation: string
}

const TopLunchCard: FC<IProps> = ({img, tag, title, date, lazyLoading, evaluation}) => {
    return (
        <div className={'card'}>
            <img loading={lazyLoading ? "lazy" : "eager"} className={'card__img-top'} alt={title} src={img}/>
            <div className={'card__text'}>
                <div className={'card__tag'}>
                    <p>{tag}</p>
                </div>
                <div className={'card__title'}>
                    <h4>{title}</h4>
                    <img loading={'lazy'} className={'card__img-bookmark'} alt={'BookMark'} src={BookMark}/>
                </div>
            </div>
            <div className={'card__info'}>
                <p className={'card__info-text'}>{date}</p>
                <img loading={'lazy'} className={'card__img-star'} alt={'star'} src={Star}/>
                <p className={'card__info-text'}>{evaluation}</p>
            </div>
        </div>
    );
};

export default TopLunchCard;