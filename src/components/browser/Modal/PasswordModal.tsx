import React from "react";
import "./PasswordModal.scss";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {closeModal} from "../../../modules/modal";
import {joinRoom} from "../../../common/util/joinRoom";
import useInput from "../../../common/hooks/useInput";

import {ReactComponent as Lock} from "../../../resource/img/icon/lock.svg";

function PasswordModal() {
    const {roomName, temp} = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();
    const {input: password} = useInput('');
    const close = () => dispatch(closeModal());

    return (
        <div className="password modal">
            <div className="title">
                <Lock fill="#000000"/>
                <span>{roomName}</span>
            </div>
            <input
                type="text"
                placeholder="비밀번호를 입력하세요"
                {...password}
            />
            <div className="buttons">
                <button className="abort" onClick={close}>
                    <span>취소</span>
                </button>
                <button
                    className="join"
                    disabled={password.value.length === 0}
                    onClick={() => {
                        joinRoom(roomName, password.value, temp);
                        close();
                    }}
                >
                    <span>{temp ? '임시 참여' : '참여하기'}</span>
                </button>
            </div>
        </div>
    );
}

export default React.memo(PasswordModal);