import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function IFitImageList(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    
    const getCols = () => {
        if (isSmallScreen) return 1; // 1 column for small screens
        if (isMediumScreen) return 2; // 2 columns for medium screens
        return 3; // 3 columns for large screens
    };

    return (
        <ImageList 
            className='imageList' 
            cols={getCols()} 
            gap={8} 
            sx={{ 
                width: '100%', 
                height: 'auto', 
                padding: '16px' 
            }}
        >
            {props.itemList.map((item) => (
                <ImageListItem key={item.img}>
                    <img 
                        className="images"
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={<span>by: {item.author}</span>}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default IFitImageList;
