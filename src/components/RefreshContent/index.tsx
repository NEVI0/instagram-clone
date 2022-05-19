import React, { useState, useEffect } from 'react';
import * as S from './styles';

const RefreshContent: React.FC = () => {

	const [ showRefreshButton, setShowRefreshButton ] = useState<boolean>(false);

	useEffect(() => {
		if (process.env.NODE_ENV === 'development') return;
		const timer = setTimeout(() => setShowRefreshButton(true), 1000 * 1000);
		return () => clearTimeout(timer);
	  }, []);
	
	return (
		<S.RefreshContent style={{ top: showRefreshButton ? 'calc(80px - 6px)' : 'calc(80px - 100px)' }}>
			New Posts
		</S.RefreshContent>
	);

}

export default RefreshContent;
