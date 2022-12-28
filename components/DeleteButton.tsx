import { MdDeleteForever } from "react-icons/md";

interface IDeleteButtonProps {
  handleDelete: () => void;
}

const DeleteButton: React.FunctionComponent<IDeleteButtonProps> = ({
  handleDelete,
}) => {
  return (
    <div className="flex gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        <div
          className="bg-primary rounded-full p-2 md:p-4 text-red-500"
          onClick={handleDelete}
        >
          <MdDeleteForever className="text-lg md:text-2xl" />
        </div>
        <p className="text-md font-semibold">Delete</p>
      </div>
    </div>
  );
};

export default DeleteButton;
