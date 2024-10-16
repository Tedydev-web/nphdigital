import { useEffect, useRef, useState } from 'react';
import Canvas from '../canvas/Canvas';
import MenuBlack from '../../../public/assets/imgs/icon/menu-black.png';
import Image from 'next/image';
import SearchData from '../../data/searchData.json';
import { useRouter } from 'next/router';
import NavItem from '../nav/NavItem';
import LogoItem from '../logo/LogoItem';

export default function Header1({ navData }) {
	const [topScroll, setTopScroll] = useState(0);
	const [searchData, setSearchData] = useState({});
	const [searchValue, setSearchValue] = useState('');
	const [searchSlug, setSearchSlug] = useState([]);

	const ofCanvasArea = useRef();
	const headerArea = useRef();
	const headerSearch = useRef();
	const searchIcon = useRef();
	const searchClose = useRef();
	const searchContent = useRef();

	const router = useRouter();
	const handleTopScroll = () => {
		const position = window.pageYOffset;
		setTopScroll(position);
	};

	useEffect(() => {
		setSearchData(SearchData.search);
		window.addEventListener('scroll', handleTopScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleTopScroll);
		};
	}, []);
	if (typeof window !== 'undefined') {
		let header_bg_3 = headerArea.current;
		if (header_bg_3) {
			if (topScroll > 20) {
				header_bg_3.classList.add('sticky-3');
			} else {
				header_bg_3.classList.remove('sticky-3');
			}
		}
	}

	const openCanvas = () => {
		ofCanvasArea.current.style.opacity = '1';
		ofCanvasArea.current.style.visibility = 'visible';
	};

	const openSearch = () => {
		headerSearch.current.classList.add('open-search');
		searchIcon.current.style.display = 'none';
		searchClose.current.style.display = 'block';
	};
	const closeSearch = () => {
		headerSearch.current.classList.remove('open-search');
		searchIcon.current.style.display = 'block';
		searchClose.current.style.display = 'none';
		setSearchValue('');
		let inputData = document.getElementById('s');
		inputData.value = '';
	};
	useEffect(() => {
		if (searchData && Object.keys(searchData).length) {
			if (searchValue) {
				let parentDiv = searchContent.current;
				parentDiv.innerHTML = '';
				const allSlug = [];
				searchData.map((el) => {
					let result = el.name.includes(searchValue);
					if (result) {
						allSlug.push(el.slug);
						let createTag = document.createElement('p');
						createTag.innerHTML = el.name;
						createTag.classList.add('search-name');
						parentDiv.appendChild(createTag);
					}
				});
				setSearchSlug(allSlug);
			} else {
				let parentDiv = searchContent.current;
				parentDiv.innerHTML = '';
				const allSlug = [];
				setSearchSlug(allSlug);
			}
		}
	}, [searchValue, searchData]);
	const searchItem = (event) => {
		event.preventDefault();
		if (searchSlug && searchSlug.length) {
			router.push('/' + searchSlug[0]);
		}
	};
	return (
		<>
			{navData && Object.keys(navData).length && (
				<>
					<header
						className="header__area-3"
						ref={headerArea}>
						<div className="header__inner-3">
							<LogoItem />
							{navData.nav && navData.nav.length && (
								<NavItem
									nav={navData.nav}
									navStyle={3}
								/>
							)}
							<div className="header__nav-icon-3">
								<button
									className="search-icon"
									onClick={openSearch}
									id="search_icon"
									ref={searchIcon}>
									<i className="fa-solid fa-magnifying-glass"></i>
								</button>
								<button
									className="search-icon"
									onClick={closeSearch}
									id="search_close"
									ref={searchClose}>
									<i className="fa-solid fa-xmark"></i>
								</button>
								<button onClick={openCanvas}>
									<Image
										priority
										width={21}
										height={15}
										src={MenuBlack}
										alt="Menubar Icon"
									/>
								</button>
							</div>
						</div>
					</header>
					<div
						className="header__search"
						ref={headerSearch}>
						<form onSubmit={(event) => searchItem(event)}>
							<input
								type="text"
								name="s"
								id="s"
								placeholder="Search.."
								onChange={(event) => setSearchValue(event.target.value)}
							/>
							<div
								id="search-value"
								ref={searchContent}></div>
						</form>
					</div>
				</>
			)}
			<Canvas ofCanvasArea={ofCanvasArea} />
		</>
	);
}
