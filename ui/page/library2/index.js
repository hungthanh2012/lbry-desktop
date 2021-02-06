import { connect } from 'react-redux';
import {
  selectDownloadUrlsCount,
  selectIsFetchingFileList,
  selectMyPurchases,
  selectIsFetchingMyPurchases,
  doPurchaseList,
  selectMyPlaylists,
} from 'lbry-redux';

import LibraryPage from './view';

const select = state => ({
  allDownloadedUrlsCount: selectDownloadUrlsCount(state),
  fetchingFileList: selectIsFetchingFileList(state),
  myPurchases: selectMyPurchases(state),
  fetchingMyPurchases: selectIsFetchingMyPurchases(state),
  playlists: selectMyPlaylists(state),
});

export default connect(select, {
  doPurchaseList,
})(LibraryPage);
