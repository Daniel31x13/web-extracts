// Copyright (C) 2022-present Daniel31x13 <daniel31x13@gmail.com>
// This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, version 3.
// This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
// You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.

import React, { useState } from "react";
import { AccountSettings } from "@/types/global";

type Props = {
  togglePasswordFormModal: Function;
  user: AccountSettings;
  setPasswordForm: Function;
};

export default function AddCollection({
  togglePasswordFormModal,
  user,
  setPasswordForm,
}: Props) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const submit = async () => {
    if (oldPassword !== "" && newPassword1 !== "" && newPassword2 !== "") {
      if (newPassword1 === newPassword2) {
        setPasswordForm(oldPassword, newPassword1);
        togglePasswordFormModal();
      } else {
        console.log("Passwords do not match.");
      }
    } else {
      console.log("Please fill out all the fields.");
    }
  };

  return (
    <div className="sm:w-[33rem] w-72">
      <div className="max-w-sm mx-auto flex flex-col gap-3">
        <p className="text-xl text-sky-500 mb-2 text-center">Change Password</p>

        <p className="text-sm font-bold text-sky-300">Old Password</p>

        <input
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          type="text"
          className="w-full rounded-md p-3 mx-auto border-sky-100 border-solid border outline-none focus:border-sky-500 duration-100"
        />
        <p className="text-sm font-bold text-sky-300">New Password</p>

        <input
          value={newPassword1}
          onChange={(e) => setNewPassword1(e.target.value)}
          type="text"
          className="w-full rounded-md p-3 mx-auto border-sky-100 border-solid border outline-none focus:border-sky-500 duration-100"
        />
        <p className="text-sm font-bold text-sky-300">Re-enter New Password</p>

        <input
          value={newPassword2}
          onChange={(e) => setNewPassword2(e.target.value)}
          type="text"
          className="w-full rounded-md p-3 mx-auto border-sky-100 border-solid border outline-none focus:border-sky-500 duration-100"
        />

        <div
          className="mx-auto mt-2  text-white flex items-center gap-2 py-2 px-5 rounded-md select-none font-bold duration-100 bg-sky-500 hover:bg-sky-400 cursor-pointer"
          onClick={submit}
        >
          Save
        </div>
      </div>
    </div>
  );
}