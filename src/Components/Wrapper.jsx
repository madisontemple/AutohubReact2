import styled from 'styled-components';


const Wrapper = styled.div`
${({flex}) => flex && 'display: flex;'}
${({direction}) => direction && `flex-direction: ${direction}`}
${({jc}) => jc && `justify-content: ${jc};`}

${({ai}) => ai && `align-items: ${ai};`}
${({column}) => column && 'flex-direction:column;'}
${({center}) => center && 'text-align: center;'}
${({textleft}) => textleft && 'text-align: left;'}
${({textright}) => textright && 'text-align: right;'}


${({mt}) => mt && `margin-top: ${mt};`}
${({mr}) => mr && `margin-right: ${mr};`}
${({mb}) => mb && `margin-bottom: ${mb};`}
${({ml}) => ml && `margin-left: ${ml};`}

${({pt}) => pt && `padding-top: ${pt};`}
${({pr}) => pr && `padding-right: ${pr};`}
${({pb}) => pb && `padding-bottom: ${pb};`}
${({pl}) => pl && `padding-left: ${pl};`}

${({relative}) => relative && `position:relative`}
${({top}) => top && `top: ${top};`}
${({right}) => right && `right: ${right};`}
${({bottom}) => bottom && `bottom: ${bottom};`}
${({left}) => left && `left: ${left};`}

${({width}) => width && `width: ${width};`}
${({height}) => height && `height: ${height};`}
 
${({fs}) => fs && `font-size: ${fs};`}
${({fw}) => fw && `font-weight: ${fw};`}
${({backgroundColor}) => backgroundColor && `background-color: ${backgroundColor}`}

`;

export default Wrapper;