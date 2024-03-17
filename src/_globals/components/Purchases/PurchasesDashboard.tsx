import React, {FC} from 'react';

interface IProps {
    img: string
    title: string
    subtitle: string
    date: string
    red?: boolean
    lazyLoading?: boolean
    boxShadow?: boolean
}

const PurchasesDashboard: FC<IProps> = ({img, subtitle, title, date, red = false, lazyLoading, boxShadow}) => {
    return (
        <div className={`dashboard ${boxShadow && 'dashboard--shadow'}`}>
            <img loading={lazyLoading ? "lazy" : "eager"} className={'dashboard__img'} alt={title} src={img}/>
            <div className={'dashboard__text'}>
                <h3 className={'dashboard__title'}>{title}</h3>
                <p className={`dashboard__subtitle ${red && 'dashboard__subtitle--red'}`}>{subtitle}</p>
            </div>
            <p className={'dashboard__date'}>{date}</p>
        </div>
    );
};

export default PurchasesDashboard;