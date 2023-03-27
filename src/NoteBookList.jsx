import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';


const NoteBookList = (props) => {
    const { btnData, deleteTodo, updateTodo } = props;
    return (
        <>
            {
                btnData.map((val, id) => (
                    <div className="row mt-1 mx-3 row-cols-1 row-cols-md-2 g-4 justify-content-md-center" key={id}>
                        <div className="col" >
                            <div className="card back">
                                <div className="card-body d-flex justify-content-between align-items-center ">
                                    <h4 className="card-text text-center mb-0">
                                        {val}
                                    </h4>
                                    <div>
                                        <DriveFileRenameOutlineRoundedIcon fontSize='medium' className='mx-2 cursior'
                                            onClick={() => { updateTodo(val, id) }}
                                        />
                                        <DeleteRoundedIcon fontSize='medium' className='cursior'
                                            onClick={() => { deleteTodo(val, id) }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))

            }
        </>
    );
}

export default NoteBookList;

