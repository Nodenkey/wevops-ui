import styled, { css } from 'styled-components';
import { typeScale } from '../utils/typeScale';
import { LayoutProps } from './GeneralProps';

//Divs & Containers
export const Container = styled.div<{ fluid?: boolean }>`
	flex-grow: 1;
	margin: 0 auto;
	padding: 0 5vw;
	position: relative;
	width: auto;
	height: 100%;
	align-items: center;
	justify-content: center;
	@media (min-width: 600px) {
		padding: 0 32px;
	}
	@media (min-width: 1024px) {
		max-width: 960px;
	}
	@media (min-width: 1216px) {
		max-width: 1152px;
	}
	@media (min-width: 1408px) {
		max-width: 1244px;
	}
	${props =>
    props.fluid &&
    css`
			padding: 0;
			margin: 0;
			max-width: 100% !important;
		`}
`;

export const Section = styled.div`
	margin: 50px 0;
	@media (min-width: 992px) {
		margin: 100px 0;
	}
`;

export const Flex = styled.div<LayoutProps>`
	display: ${props => (props.inline ? 'inline-flex' : 'flex')};
	position: relative;
	align-items: center;
	justify-content: center;

	${({ fullHeight }) =>
    fullHeight &&
    css`
			height: 100%;
		`}

	${props =>
    props.vertical &&
    css`
			flex-direction: column;
		`};
	${props =>
    props.alignFlexStart &&
    css`
			align-items: flex-start;
		`};
	${props =>
    props.alignFlexEnd &&
    css`
			align-items: flex-end;
		`};
	${props =>
    props.justifyFlexStart &&
    css`
			justify-content: flex-start;
		`};
	${props =>
    props.justifyFlexEnd &&
    css`
			justify-content: flex-end;
		`};
	${props =>
    props.wrapContainer &&
    css`
			flex-wrap: wrap;
		`};
	${props =>
    props.spaceBetween &&
    css`
			justify-content: space-between;
		`};
	${props =>
    props.spaceAround &&
    css`
			justify-content: space-around;
		`};
	@media only screen and (max-width: 600px) {
		${props =>
    props.verticalReversePhone &&
    css`
				flex-direction: column-reverse;
			`};
	}
`;

export const Grid = styled.div<LayoutProps>`
	display: grid;
	width: 100%;
	grid-gap: ${({ phoneGap }) => phoneGap || '0'};
	grid-template-rows: auto;
	align-items: ${({ alignFlexStart, alignFlexEnd }) =>
    alignFlexStart ? 'flex-start' : alignFlexEnd ? 'flex-end' : 'center'};
	justify-items: ${({ justifyFlexStart, justifyFlexEnd }) =>
    justifyFlexStart
        ? 'flex-start'
        : justifyFlexEnd
            ? 'flex-end'
            : 'center'};
	${({ left }) =>
    left &&
    css`
			justify-items: flex-start;
		`};
	@media only screen and (min-width: 600px) {
		grid-template-columns: ${props =>
    props.tabNum
        ? typeof props.tabNum === 'object'
            ? `${props.tabNum.toString()}`
            : `repeat(${props.tabNum}, 1fr)`
        : typeof props.num === 'object'
            ? `${props.num.toString()}`
            : `repeat(${props.num}, 1fr)`};
		grid-gap: ${props => props.gapTab || props.gap || '100px'};
		${props =>
    props.auto &&
    css`
				grid-template-columns: auto;
			`}
	}
	@media only screen and (min-width: 900px) {
		grid-template-columns: ${props =>
    typeof props.num === 'object'
        ? `${props.num.toString()}`
        : `repeat(${props.num}, 1fr)`};
		grid-gap: ${props => props.gap || '100px'};
		${props =>
    props.auto &&
    css`
				grid-template-columns: auto;
			`}
	}
	@media only screen and (max-width: 600px) {
		grid-template-columns: ${props =>
    props.phoneNum
        ? typeof props.phoneNum === 'object'
            ? `${props.phoneNum.toString()}`
            : `repeat(${props.phoneNum}, 1fr)`
        : '1fr'};
	}
`;

export const ImageContainer = styled.div<{
    width?: string;
    height?: string;
    contain?: boolean;
}>`
	position: relative;
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ width, height }) =>
    height ? height : width ? width : '100%'};

	img {
		object-fit: ${({ contain }) => (contain ? 'contain' : 'cover')};
		width: 100%;
		height: 100%;
	}
`;

export const LayoutChildrenWrapper = styled.div`
	min-height: 80vh;
	margin-top: 90px;
	@media (max-width: 1200px) {
		margin-top: 0;
	}
`;

//Texts
export const HeaderOne = styled.h1<{center: string}>`
	margin-top: 0;
	font-size: ${typeScale.headerTwo};
	display: block;
	text-align: ${({center}) => center ? 'center !important' : 'left'};
	line-height: 120%;
	@media only screen and (min-width: 900px) {
		font-size: ${typeScale.headerOne};
	}
`;

export const HeaderTwo = styled.h2<{center: string}>`
	font-size: ${typeScale.headerThree};
	display: block;
	text-align: ${({center}) => center ? 'center !important' : 'left'};
	line-height: 120%;
	@media only screen and (min-width: 600px) {
		font-size: ${typeScale.headerTwo};
	}
`;

export const HeaderThree = styled.h3<{center: string}>`
	font-size: ${typeScale.headerFour};
	text-align: ${({center}) => center ? 'center !important' : 'left'};
	display: block;
	line-height: 140%;
	@media only screen and (min-width: 600px) {
		font-size: ${typeScale.headerThree};
	}
`;

export const HeaderFour = styled.h4<{center: string}>`
	font-size: ${typeScale.headerFive};
	text-align: ${({center}) => center ? 'center !important' : 'left'};
	display: block;
	line-height: 140%;
	@media only screen and (min-width: 600px) {
		font-size: ${typeScale.headerFour};
	}
`;

export const HeaderFive = styled.h5<{center: string}>`
	font-size: ${typeScale.paragraph};
	text-align: ${({center}) => center ? 'center !important' : 'left'};
	display: block;
	line-height: 200%;
	@media only screen and (min-width: 600px) {
		font-size: ${typeScale.headerFive};
		max-width: 800px;
	}
`;

export const Paragraph = styled.p<{center: string}>`
	font-size: ${typeScale.paragraph};
	display: block;
	text-align: ${({center}) => center ? 'center !important' : 'left'};
	line-height: 200%;
	max-width: 700px;
	margin-top: initial;
	margin-bottom: initial;
	margin-right: auto;
	margin-left: auto;
`;

export const ShadowBox = styled.div`
	min-height: 100px;
	position: relative;
	background-color: white;
	padding: 30px;
	margin: 0 auto;
	max-width: max-content;
	-webkit-box-shadow: 0 3px 6px 0 #b4b4b450;
	-moz-box-shadow: 0 3px 6px 0 #b4b4b450;
	box-shadow: 0 3px 6px 0 #b4b4b450;

	> div {
		height: 100%;
		width: 100%;
	}
`;

export const BannerWrapper = styled.div`
	position: relative;
	min-height: 250px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> div:first-of-type {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}

	> div:last-of-type {
		padding: 50px 5vw;
		position: relative;
		z-index: 2;
		width: 100%;
		text-align: center;
		margin: auto;
		max-width: 1000px;
		height: fit-content;

		h5 {
			margin-bottom: 0;
			text-align: center;
		}
	}
`;

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	background-color: rgba(0, 0, 0, 0.6);
`;

export const Circle = styled.div<{
    size?: string;
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
}>`
	position: absolute;
	background-color: #B4B4B450;
	opacity: 0.3;
	border-radius: 50%;
	width: ${props => props.size};
	height: ${props => props.size};
	top: ${props => (props.top ? props.top : 'auto')};
	bottom: ${props => (props.bottom ? props.bottom : 'auto')};
	right: ${props => (props.right ? props.right : 'auto')};
	left: ${props => (props.left ? props.left : 'auto')};
	z-index: -1;
`;

export const Divider = styled.div<{ diff: string }>`
	width: ${({ diff }) => `calc(100% + ${diff} + ${diff} )`};
	height: 1px;
	background-color: #B4B4B429;
	margin: 20px 0 20px ${({ diff }) => diff && '0'};
`;
