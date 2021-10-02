import {datoToLocal} from '../../../../../../helpers/date';

export const DateColumnFormatter =  (date) => {
  if(!date)
 return ""
else
  return datoToLocal(date);
}
