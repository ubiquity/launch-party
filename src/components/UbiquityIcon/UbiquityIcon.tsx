import React from 'react';
import ubiquity from '../../assets/img/ubiquity.png';

interface UbiquityIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const UbiquityIcon: React.FC<UbiquityIconProps> = ({ size = 36, v1, v2, v3 }) => (
  <span
    role="img"
    style={{
      fontSize: size,
      filter: v1 ? 'saturate(0.5)' : undefined,
    }}
  >
    <img src={ubiquity} height="32" style={{ marginTop: -4 }} />
  </span>
)

export default UbiquityIcon
