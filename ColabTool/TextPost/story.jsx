import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import TextPost from './index';

const links = [{
  rawString: 'http://buff.ly/1LTbUqv',
  displayString: 'http://buff.ly/1LTbUqv',
  url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
  indices: [74, 96],
}];

const text = 'What is a Product Designer? An awesome story by @jgadapee over on Medium! http://buff.ly/1LTbUqv';

const retweetComment = 'Awesome book news here: http://buff.ly/2oZYTnY';

const retweetCommentLinks = [{
  rawString: 'http://buff.ly/2oZYTnY',
  displayString: 'http://buff.ly/2oZYTnY',
  url: 'https://www.theguardian.com/books',
  indices: [24, 46],
}];

const draftDetails = {
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  createdAt: 'on March 2nd at 12:45pm (GMT)',
  email: 'ash@buffer.com',
  isRetweet: false,
  postAction: 'This post is scheduled for 9:42pm (GMT)',
  userName: 'Ash',
  via: 'api',
};

const isARetweetDraftDetails = {
  ...draftDetails,
  isRetweet: true,
};

const draftDetailsPastDue = {
  ...draftDetails,
  postAction: 'This post was scheduled for March 12 at 9:42pm (GMT)',
};

const retweetProfile = {
  name: 'Joel Gascoigne',
  handle: '@joelgascoigne',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png',
};


storiesOf('TextPost')
  .addDecorator(checkA11y)
  .add('default', () => (
    <TextPost
      hasPermission
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
    />
  ))
  .add('manager', () => (
    <TextPost
      hasPermission
      links={links}
      draftDetails={draftDetails}
      text={text}
      manager
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
    />
  ))
  .add('retweet', () => (
    <TextPost
      hasPermission
      links={links}
      draftDetails={isARetweetDraftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      retweetProfile={retweetProfile}
    />
  ))
  .add('retweet with comment', () => (
    <TextPost
      hasPermission
      links={links}
      draftDetails={isARetweetDraftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      retweetProfile={retweetProfile}
      retweetComment={retweetComment}
      retweetCommentLinks={retweetCommentLinks}
    />
  ))
  .add('past due', () => (
    <TextPost
      hasPermission
      links={links}
      draftDetails={draftDetailsPastDue}
      isPastDue
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
    />
  ))
  .add('past due no permission', () => (
    <TextPost
      hasPermission={false}
      links={links}
      draftDetails={draftDetailsPastDue}
      isPastDue
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
    />
  ))
  .add('no permission', () => (
    <TextPost
      hasPermission={false}
      links={links}
      draftDetails={draftDetails}
      text={text}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
    />
  ));
