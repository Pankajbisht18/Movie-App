import Pagination from '@material-ui/lab/Pagination';

const CustomPagination = ({setPage, numOfPages=10}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0)
    }
    return(
        <div style={{
            width:'100%',
            display:'flex',
            justifyContent:'center',
            marginTop: '10px',
            padding: '10px 0px',
            background: '#DDDFDF',
            color: '#fff'
        }}>
            <Pagination 
                count={numOfPages}
                size="large"
                color="primary"
                hideNextButton
                hidePrevButton
                onChange={(e)=>handlePageChange(e.target.textContent)} 
            />
        </div>
    );
}
export default CustomPagination;