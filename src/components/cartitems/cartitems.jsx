
import { useDispatch} from 'react-redux'
import { removeCart } from "../../redux/slices/productSlice";


const Cartitems = ({ cartitem }) => {
  
  const dispatch = useDispatch();
 
    function handleRemoveFromCart() {
        dispatch(removeCart(cartitem.id))
        
      }

  return (
    <div>
      <div className="flex items-center p-5 justify-between bg-slate-600 mb-2 rounded-xl col-4">
        <div className="flex p-3">
          <img src={cartitem.image} className="h-10 w-10 rounded-lg" alt="" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartitem.title}</h1>
            <p className="text-white font-extrabold">{cartitem.price}</p>
          </div>
        </div>
        {/* remove button */}
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-slate-800 text-white border-2 rounded-lg p-4"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
