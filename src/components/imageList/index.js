import React from 'react';
import Gallery from 'react-grid-gallery';
import './index.css';

class ImageList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            IMAGES: [
                {
                    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
                    thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
                    isSelected: true,
                    caption: 'After Rain (Jeshu John - designerspics.com)',
                },
                {
                    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
                    thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
                    // tags: [{ value: 'Ocean', title: 'Ocean' }, { value: 'People', title: 'People' }],
                    caption: 'Boats (Jeshu John - designerspics.com)',
                },
                {
                    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
                    thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
                    caption: 'Color Pencils (Jeshu John - designerspics.com)',
                },
                {
                    src: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg',
                    thumbnail: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_n.jpg',
                    caption: 'Red Apples with other Red Fruit (foodiesfeed.com)',
                },
                {
                    src: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg',
                    thumbnail: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg',
                    caption: '37H (gratispgraphy.com)',
                },
                {
                    src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
                    thumbnail: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
                    // tags: [{ value: 'Nature', title: 'Nature' }],
                    caption: '8H (gratisography.com)',
                },
                {
                    src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
                    thumbnail: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
                    caption: '286H (gratisography.com)',
                },
                {
                    src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
                    thumbnail: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
                    // tags: [{ value: 'People', title: 'People' }],
                    caption: '315H (gratisography.com)',
                },
                {
                    src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
                    thumbnail: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
                    caption: '201H (gratisography.com)',
                },
                {
                    src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
                    alt: 'Big Ben - London',
                    thumbnail: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
                    caption: 'Big Ben (Tom Eversley - isorepublic.com)',
                },
                {
                    src: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg',
                    alt: 'Red Zone - Paris',
                    thumbnail: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
                    // tags: [{ value: 'People', title: 'People' }],
                    caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)',
                },
                {
                    src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
                    alt: 'Wood Glass',
                    thumbnail: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
                    caption: 'Wood Glass (Tom Eversley - isorepublic.com)',
                },
                {
                    src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
                    thumbnail: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
                    caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)',
                },
                {
                    src: 'https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg',
                    thumbnail: 'https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_n.jpg',
                    caption: 'Old Barn (Tom Eversley - isorepublic.com)',
                },
                {
                    src: 'https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg',
                    alt: 'Cosmos Flower',
                    thumbnail: 'https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_n.jpg',
                    caption: 'Cosmos Flower Macro (Tom Eversley - isorepublic.com)',
                },
                {
                    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
                    thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
                },
            ],
        };
    }
    onSelectImage = index => {
        const { IMAGES } = this.state;
        console.log('IMAGES=====', IMAGES);
        this.setState({
            IMAGES: IMAGES.map((v, i) => (i === index ? { ...v, isSelected: true } : v)),
        });
    };
    render() {
        const imgs = this.state.IMAGES.map(v => ({
            ...v,
            thumbnailWidth: 200,
            thumbnailHeight: 200,
        }));
        return <Gallery images={imgs} onSelectImage={this.onSelectImage} />;
    }
}

export default ImageList;