import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faXmark } from '@fortawesome/free-solid-svg-icons';

const Switcher = ({ setMode, mode, cursor1, cursor2 }) => {
	const switcherIcon = useRef();
	const switcherItems = useRef();
	const switcherOpen = useRef();
	const switcherClose = useRef();
	const cursorStyle = useRef();
	const [isOpen, setIsOpen] = useState(false);
	let idleTimeout = useRef();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			switcherIcon.current.style.zIndex = '1000';
			switcherItems.current.style.zIndex = '1000';

			// Lắng nghe sự kiện click ngoài switcher để đóng nó
			document.addEventListener('click', handleOutsideClick);

			return () => {
				document.removeEventListener('click', handleOutsideClick);
				clearTimeout(idleTimeout.current); // Dọn dẹp timeout khi component unmount
			};
		}
	}, []);

	// Đóng switcher khi click ngoài nó
	const handleOutsideClick = (e) => {
		if (switcherItems.current && !switcherItems.current.contains(e.target) && !switcherIcon.current.contains(e.target)) {
			triggerCloseWithDelay();
		}
	};

	// Mở switcher
	const openSwitcher = () => {
		setIsOpen(true);
		switcherOpen.current.style.display = 'none';
		switcherClose.current.style.display = 'flex';
		switcherIcon.current.style.right = '280px';
		switcherItems.current.style.right = '0';

		startIdleTimeout();
	};

	// Đóng switcher với transition delay 1.5 giây
	const triggerCloseWithDelay = () => {
		// Thêm class để chuyển tiếp animation
		switcherItems.current.classList.add('closing');
		setTimeout(() => {
			closeSwitcher(); // Thực hiện đóng sau 1.5 giây
		}, 2000);
	};

	// Đóng switcher ngay lập tức
	const closeSwitcher = () => {
		setIsOpen(false);
		switcherClose.current.style.display = 'none';
		switcherOpen.current.style.display = 'flex';
		switcherIcon.current.style.right = '0';
		switcherItems.current.style.right = '-280px';
		switcherItems.current.classList.remove('closing'); // Loại bỏ class sau khi đóng
		clearTimeout(idleTimeout.current);
	};

	// Quản lý trạng thái cursor
	const cursor = () => {
		let cursor_val = cursorStyle.current.value;
		if (cursor1.current && cursor2.current) {
			if (cursor_val === '1') {
				cursor1.current.style.display = 'none';
				cursor2.current.style.display = 'none';
			} else {
				cursor1.current.style.display = '';
				cursor2.current.style.display = '';
			}
		}
		triggerCloseWithDelay(); // Đóng sau khi chọn
	};

	// Thay đổi chế độ sáng/tối
	const modeChange = (data) => {
		if (setMode) {
			setMode(data === 'dark' ? 'dark' : '');
		}
		triggerCloseWithDelay(); // Đóng sau khi chọn
	};

	// Khởi động timeout đóng sau 5 giây
	const startIdleTimeout = () => {
		clearTimeout(idleTimeout.current);
		idleTimeout.current = setTimeout(() => {
			triggerCloseWithDelay();
		}, 3000);
	};

	return (
		<div className="switcher__area">
			<div
				className="switcher__icon"
				ref={switcherIcon}>
				<button
					id="switcher_open"
					ref={switcherOpen}
					onClick={openSwitcher}>
					<FontAwesomeIcon icon={faGear} />
				</button>
				<button
					id="switcher_close"
					ref={switcherClose}
					onClick={triggerCloseWithDelay}>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			</div>

			<div
				className="switcher__items"
				ref={switcherItems}
				onMouseEnter={() => clearTimeout(idleTimeout.current)}
				onMouseLeave={startIdleTimeout}>
				<div className="switcher__item">
					<div className="switch__title-wrap">
						<h2 className="switcher__title">Cursor</h2>
					</div>
					<div className="switcher__btn">
						<select
							defaultValue={2}
							name="cursor-style"
							id="cursor_style"
							ref={cursorStyle}
							onChange={cursor}>
							<option value="1">default</option>
							<option value="2">animated</option>
						</select>
					</div>
				</div>

				<div className="switcher__item">
					<div className="switch__title-wrap">
						<h2 className="switcher__title">Mode</h2>
					</div>
					<div className="switcher__btn mode-type wc-col-2">
						<button
							onClick={() => modeChange('light')}
							className={mode === 'dark' ? '' : 'active'}>
							Light
						</button>
						<button
							onClick={() => modeChange('dark')}
							className={mode === 'dark' ? 'active' : ''}>
							Dark
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Switcher;
