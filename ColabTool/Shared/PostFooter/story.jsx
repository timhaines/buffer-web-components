import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import { checkA11y } from 'storybook-addon-a11y';
import PostFooter from './index';

const draftDetails = {
  userName: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'web',
  createdAt: 'March 2nd at 12:45pm (GMT)',
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

const draftDetailsPastDue = {
  ...draftDetails,
  postAction: 'This post was scheduled for March 12 at 9:42pm (GMT)',
};

storiesOf('PostFooter')
  .addDecorator(checkA11y)
  .add('default', () => (
    <PostFooter
      hasPermission
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
    />
  ))
  .add('manager', () => (
    <PostFooter
      hasPermission
      manager
      onApproveClick={linkTo('PostFooter', 'managerIsApproving')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
    />
  ))
  .add('isConfirmingDelete', () => (
    <PostFooter
      hasPermission
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isConfirmingDelete
    />
  ))
  .add('managerIsConfirmingDelete', () => (
    <PostFooter
      hasPermission
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isConfirmingDelete
    />
  ))
  .add('isDeleting', () => (
    <PostFooter
      hasPermission
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isDeleting
    />
  ))
  .add('managerIsDeleting', () => (
    <PostFooter
      hasPermission
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isDeleting
    />
  ))
  .add('managerIsApproving', () => (
    <PostFooter
      hasPermission
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isWorking
    />
  ))
  .add('past due with permission', () => (
    <PostFooter
      hasPermission
      isPastDue
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      draftDetails={draftDetailsPastDue}
    />
  ))
  .add('manager past due', () => (
    <PostFooter
      hasPermission
      isPastDue
      manager
      onApproveClick={linkTo('PostFooter', 'managerIsApproving')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      draftDetails={draftDetailsPastDue}
    />
  ))
  .add('past due no permission', () => (
    <PostFooter
      hasPermission={false}
      isPastDue
      manager
      onApproveClick={linkTo('PostFooter', 'managerIsApproving')}
      onCancelConfirmClick={linkTo('PostFooter', 'manager')}
      onDeleteClick={linkTo('PostFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      draftDetails={draftDetailsPastDue}
    />
  ))
  .add('no permission', () => (
    <PostFooter
      hasPermission={false}
      onCancelConfirmClick={linkTo('PostFooter', 'default')}
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
    />
  ));
