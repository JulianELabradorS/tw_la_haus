import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PhoneInput from "react-phone-input-2";
import { sendMessage } from "../../../modules/messages/actions";
import "react-phone-input-2/lib/style.css";
import Textarea from "../../ui/textarea";

const MessageForm = () => {
  const [formState, setFormState] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const target = e.target;

    setFormState({ ...formState, [target.name]: target.value });
  };

  const handlePhoneChange = (phone) => {
    setFormState({ ...formState, receiver: `+${phone}` });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage(formState));
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div class="p-12 bg-neutral-900 mx-auto rounded-3xl w-96 ">
        <div className="sm:text-3xl text-2xl font-semibold text-center  dark:text-white  mb-12">
          Send Message
        </div>
        <div>
          <div className="mb-5">
            <PhoneInput
              country={"us"}
              inputClass=" w-full text-sm  px-4 py-3 bg-stone-50 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none"
              inputProps={{
                name: "receiver",
                required: true,
              }}
              value={formState.reciver}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="mb-5">
            <Textarea
              placeholder="Message"
              name="message"
              onChange={handleChange}
              value={formState.message}
              required
            />
          </div>
          <div className="flex justify-center my-6">
            <button
              type="submit"
              class="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]"
              disabled={!formState.receiver || !formState.message}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MessageForm;
