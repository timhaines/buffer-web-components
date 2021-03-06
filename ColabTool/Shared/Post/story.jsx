import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import { checkA11y } from 'storybook-addon-a11y';
import { Text } from '@bufferapp/components';
import Post from './index';

const draftDetails = {
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  createdAt: 'on March 2nd at 12:45pm (GMT)',
  email: 'ash@buffer.com',
  isRetweet: false,
  postAction: 'This post is scheduled for 9:42pm (GMT)',
  userName: 'Ash',
  via: 'web',
};

const isARetweetDraftDetails = {
  ...draftDetails,
  isRetweet: true,
};

const retweetProfile = {
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png',
  handle: '@joelgascoigne',
  name: 'Joel Gascoigne',
};

const links = [{
  rawString: 'http://buff.ly/1LTbUqv',
  displayString: 'http://buff.ly/1LTbUqv',
  url: 'https://austinstartups.com/what-is-a-product-designer-who-cares-eb38fc7afa7b#.i3r34a75x',
  indices: [74, 96],
}];

const retweetComment = 'What is a Product Designer? An awesome story by @jgadapee over on Medium! http://buff.ly/1LTbUqv';

const children = (
  <Text size={'mini'}>
    {'I am a text-only test post.'}
  </Text>
);

storiesOf('Post')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Post
      hasPermission
      draftDetails={draftDetails}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
    >
      {children}
    </Post>
  ))
  .add('manager', () => (
    <Post
      hasPermission
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
      onApproveClick={linkTo('Post', 'isWorkingManager')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      manager
      draftDetails={draftDetails}
    >
      {children}
    </Post>
  ))
  .add('isConfirmingDelete', () => (
    <Post
      hasPermission
      isConfirmingDelete
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
    >
      {children}
    </Post>
  ))
  .add('isDeleting', () => (
    <Post
      hasPermission
      isDeleting
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
    >
      {children}
    </Post>
  ))
  .add('isWorking', () => (
    <Post
      hasPermission
      isWorking
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
    >
      {children}
    </Post>
  ))
  .add('isWorkingManager', () => (
    <Post
      hasPermission
      manager
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      isWorking
      draftDetails={draftDetails}
    >
      {children}
    </Post>
  ))
  .add('retweet', () => (
    <Post
      hasPermission
      draftDetails={isARetweetDraftDetails}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mous-leave')}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      retweetProfile={retweetProfile}
    >
      {children}
    </Post>
  ))
  .add('retweet with comment', () => (
    <Post
      hasPermission
      draftDetails={isARetweetDraftDetails}
      retweetCommentLinks={links}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mous-leave')}
      onApproveClick={action('approve-click')}
      onCancelConfirmClick={action('cancel-confirm-click')}
      onDeleteClick={action('delete-click')}
      onDeleteConfirmClick={action('delete-confirm-click')}
      onEditClick={action('edit-click')}
      retweetProfile={retweetProfile}
      retweetComment={retweetComment}
    >
      {children}
    </Post>
  ))
  .add('past due', () => (
    <Post
      hasPermission
      draftDetails={draftDetails}
      isPastDue
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
    >
      {children}
    </Post>
  ))
  .add('past due no permission', () => (
    <Post
      hasPermission={false}
      draftDetails={draftDetails}
      isPastDue
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
    >
      {children}
    </Post>
  ))
  .add('no permission', () => (
    <Post
      hasPermission={false}
      draftDetails={draftDetails}
      onApproveClick={linkTo('Post', 'isWorking')}
      onCancelConfirmClick={linkTo('Post', 'hovered')}
      onDeleteClick={linkTo('Post', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('Post', 'isDeleting')}
      onEditClick={action('edit-click')}
    >
      {children}
    </Post>
  ));
