﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using DslModeling = global::Microsoft.VisualStudio.Modeling;
using DslDesign = global::Microsoft.VisualStudio.Modeling.Design;
namespace Navigation.Designer
{
	/// <summary>
	/// DomainRelationship NavigationDiagramHasStates
	/// Embedding relationship between the Diagram and States
	/// </summary>
	[DslDesign::DisplayNameResource("Navigation.Designer.NavigationDiagramHasStates.DisplayName", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
	[DslDesign::DescriptionResource("Navigation.Designer.NavigationDiagramHasStates.Description", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
	[DslModeling::DomainModelOwner(typeof(global::Navigation.Designer.NavigationLanguageDomainModel))]
	[global::System.CLSCompliant(true)]
	[DslModeling::DomainRelationship(IsEmbedding=true)]
	[DslModeling::DomainObjectId("7d3034e5-5e93-4742-a69a-7b69dfadcf06")]
	public partial class NavigationDiagramHasStates : DslModeling::ElementLink
	{
		#region Constructors, domain class Id
		
		/// <summary>
		/// NavigationDiagramHasStates domain class Id.
		/// </summary>
		public static readonly new global::System.Guid DomainClassId = new global::System.Guid(0x7d3034e5, 0x5e93, 0x4742, 0xa6, 0x9a, 0x7b, 0x69, 0xdf, 0xad, 0xcf, 0x06);
	
				
		/// <summary>
		/// Constructor
		/// Creates a NavigationDiagramHasStates link in the same Partition as the given NavigationDiagram
		/// </summary>
		/// <param name="source">NavigationDiagram to use as the source of the relationship.</param>
		/// <param name="target">State to use as the target of the relationship.</param>
		public NavigationDiagramHasStates(NavigationDiagram source, State target)
			: base((source != null ? source.Partition : null), new DslModeling::RoleAssignment[]{new DslModeling::RoleAssignment(NavigationDiagramHasStates.NavigationDiagramDomainRoleId, source), new DslModeling::RoleAssignment(NavigationDiagramHasStates.ElementDomainRoleId, target)}, null)
		{
		}
		
		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="store">Store where new link is to be created.</param>
		/// <param name="roleAssignments">List of relationship role assignments.</param>
		public NavigationDiagramHasStates(DslModeling::Store store, params DslModeling::RoleAssignment[] roleAssignments)
			: base(store != null ? store.DefaultPartitionForClass(DomainClassId) : null, roleAssignments, null)
		{
		}
		
		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="store">Store where new link is to be created.</param>
		/// <param name="roleAssignments">List of relationship role assignments.</param>
		/// <param name="propertyAssignments">List of properties assignments to set on the new link.</param>
		public NavigationDiagramHasStates(DslModeling::Store store, DslModeling::RoleAssignment[] roleAssignments, DslModeling::PropertyAssignment[] propertyAssignments)
			: base(store != null ? store.DefaultPartitionForClass(DomainClassId) : null, roleAssignments, propertyAssignments)
		{
		}
		
		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="partition">Partition where new link is to be created.</param>
		/// <param name="roleAssignments">List of relationship role assignments.</param>
		public NavigationDiagramHasStates(DslModeling::Partition partition, params DslModeling::RoleAssignment[] roleAssignments)
			: base(partition, roleAssignments, null)
		{
		}
		
		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="partition">Partition where new link is to be created.</param>
		/// <param name="roleAssignments">List of relationship role assignments.</param>
		/// <param name="propertyAssignments">List of properties assignments to set on the new link.</param>
		public NavigationDiagramHasStates(DslModeling::Partition partition, DslModeling::RoleAssignment[] roleAssignments, DslModeling::PropertyAssignment[] propertyAssignments)
			: base(partition, roleAssignments, propertyAssignments)
		{
		}
		#endregion
		#region NavigationDiagram domain role code
		
		/// <summary>
		/// NavigationDiagram domain role Id.
		/// </summary>
		public static readonly global::System.Guid NavigationDiagramDomainRoleId = new global::System.Guid(0xd2de027a, 0x393f, 0x4a8d, 0xa7, 0x0c, 0x33, 0x47, 0xf4, 0xd6, 0x96, 0x2b);
		
		/// <summary>
		/// DomainRole NavigationDiagram
		/// </summary>
		[DslDesign::DisplayNameResource("Navigation.Designer.NavigationDiagramHasStates/NavigationDiagram.DisplayName", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslDesign::DescriptionResource("Navigation.Designer.NavigationDiagramHasStates/NavigationDiagram.Description", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslModeling::DomainRole(DslModeling::DomainRoleOrder.Source, PropertyName = "States", PropertyDisplayNameKey="Navigation.Designer.NavigationDiagramHasStates/NavigationDiagram.PropertyDisplayName",  PropagatesCopy = DslModeling::PropagatesCopyOption.PropagatesCopyToLinkAndOppositeRolePlayer, Multiplicity = DslModeling::Multiplicity.ZeroMany)]
		[DslModeling::DomainObjectId("d2de027a-393f-4a8d-a70c-3347f4d6962b")]
		public virtual NavigationDiagram NavigationDiagram
		{
			[global::System.Diagnostics.DebuggerStepThrough]
			get
			{
				return (NavigationDiagram)DslModeling::DomainRoleInfo.GetRolePlayer(this, NavigationDiagramDomainRoleId);
			}
			[global::System.Diagnostics.DebuggerStepThrough]
			set
			{
				DslModeling::DomainRoleInfo.SetRolePlayer(this, NavigationDiagramDomainRoleId, value);
			}
		}
				
		#endregion
		#region Static methods to access NavigationDiagram of a State
		/// <summary>
		/// Gets NavigationDiagram.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static NavigationDiagram GetNavigationDiagram(State element)
		{
			return DslModeling::DomainRoleInfo.GetLinkedElement(element, ElementDomainRoleId) as NavigationDiagram;
		}
		
		/// <summary>
		/// Sets NavigationDiagram.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static void SetNavigationDiagram(State element, NavigationDiagram newNavigationDiagram)
		{
			DslModeling::DomainRoleInfo.SetLinkedElement(element, ElementDomainRoleId, newNavigationDiagram);
		}
		#endregion
		#region Element domain role code
		
		/// <summary>
		/// Element domain role Id.
		/// </summary>
		public static readonly global::System.Guid ElementDomainRoleId = new global::System.Guid(0x1b72109c, 0xef14, 0x43b2, 0x9f, 0x57, 0x3e, 0x64, 0x0d, 0xc5, 0xb7, 0xdf);
		
		/// <summary>
		/// DomainRole Element
		/// </summary>
		[DslDesign::DisplayNameResource("Navigation.Designer.NavigationDiagramHasStates/Element.DisplayName", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslDesign::DescriptionResource("Navigation.Designer.NavigationDiagramHasStates/Element.Description", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslModeling::DomainRole(DslModeling::DomainRoleOrder.Target, PropertyName = "NavigationDiagram", PropertyDisplayNameKey="Navigation.Designer.NavigationDiagramHasStates/Element.PropertyDisplayName", PropagatesDelete = true,  PropagatesCopy = DslModeling::PropagatesCopyOption.DoNotPropagateCopy, Multiplicity = DslModeling::Multiplicity.One)]
		[DslModeling::DomainObjectId("1b72109c-ef14-43b2-9f57-3e640dc5b7df")]
		public virtual State Element
		{
			[global::System.Diagnostics.DebuggerStepThrough]
			get
			{
				return (State)DslModeling::DomainRoleInfo.GetRolePlayer(this, ElementDomainRoleId);
			}
			[global::System.Diagnostics.DebuggerStepThrough]
			set
			{
				DslModeling::DomainRoleInfo.SetRolePlayer(this, ElementDomainRoleId, value);
			}
		}
				
		#endregion
		#region Static methods to access States of a NavigationDiagram
		/// <summary>
		/// Gets a list of States.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static DslModeling::LinkedElementCollection<State> GetStates(NavigationDiagram element)
		{
			return GetRoleCollection<DslModeling::LinkedElementCollection<State>, State>(element, NavigationDiagramDomainRoleId);
		}
		#endregion
		#region NavigationDiagram link accessor
		/// <summary>
		/// Get the list of NavigationDiagramHasStates links to a NavigationDiagram.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static global::System.Collections.ObjectModel.ReadOnlyCollection<global::Navigation.Designer.NavigationDiagramHasStates> GetLinksToStates ( global::Navigation.Designer.NavigationDiagram navigationDiagramInstance )
		{
			return DslModeling::DomainRoleInfo.GetElementLinks<global::Navigation.Designer.NavigationDiagramHasStates>(navigationDiagramInstance, global::Navigation.Designer.NavigationDiagramHasStates.NavigationDiagramDomainRoleId);
		}
		#endregion
		#region Element link accessor
		/// <summary>
		/// Get the NavigationDiagramHasStates link to a State.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static global::Navigation.Designer.NavigationDiagramHasStates GetLinkToNavigationDiagram (global::Navigation.Designer.State elementInstance)
		{
			global::System.Collections.Generic.IList<global::Navigation.Designer.NavigationDiagramHasStates> links = DslModeling::DomainRoleInfo.GetElementLinks<global::Navigation.Designer.NavigationDiagramHasStates>(elementInstance, global::Navigation.Designer.NavigationDiagramHasStates.ElementDomainRoleId);
			global::System.Diagnostics.Debug.Assert(links.Count <= 1, "Multiplicity of Element not obeyed.");
			if ( links.Count == 0 )
			{
				return null;
			}
			else
			{
				return links[0];
			}
		}
		#endregion
		#region NavigationDiagramHasStates instance accessors
		
		/// <summary>
		/// Get any NavigationDiagramHasStates links between a given NavigationDiagram and a State.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static global::System.Collections.ObjectModel.ReadOnlyCollection<global::Navigation.Designer.NavigationDiagramHasStates> GetLinks( global::Navigation.Designer.NavigationDiagram source, global::Navigation.Designer.State target )
		{
			global::System.Collections.Generic.List<global::Navigation.Designer.NavigationDiagramHasStates> outLinks = new global::System.Collections.Generic.List<global::Navigation.Designer.NavigationDiagramHasStates>();
			global::System.Collections.Generic.IList<global::Navigation.Designer.NavigationDiagramHasStates> links = DslModeling::DomainRoleInfo.GetElementLinks<global::Navigation.Designer.NavigationDiagramHasStates>(source, global::Navigation.Designer.NavigationDiagramHasStates.NavigationDiagramDomainRoleId);
			foreach ( global::Navigation.Designer.NavigationDiagramHasStates link in links )
			{
				if ( target.Equals(link.Element) )
				{
					outLinks.Add(link);
				}
			}
			return outLinks.AsReadOnly();
		}
		/// <summary>
		/// Get the one NavigationDiagramHasStates link between a given NavigationDiagramand a State.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static global::Navigation.Designer.NavigationDiagramHasStates GetLink( global::Navigation.Designer.NavigationDiagram source, global::Navigation.Designer.State target )
		{
			global::System.Collections.Generic.IList<global::Navigation.Designer.NavigationDiagramHasStates> links = DslModeling::DomainRoleInfo.GetElementLinks<global::Navigation.Designer.NavigationDiagramHasStates>(source, global::Navigation.Designer.NavigationDiagramHasStates.NavigationDiagramDomainRoleId);
			foreach ( global::Navigation.Designer.NavigationDiagramHasStates link in links )
			{
				if ( target.Equals(link.Element) )
				{
					return link;
				}
			}
			return null;
		}
		
		#endregion
	}
}
namespace Navigation.Designer
{
	/// <summary>
	/// DomainRelationship Transition
	/// Navigation between States.
	/// </summary>
	[DslDesign::DisplayNameResource("Navigation.Designer.Transition.DisplayName", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
	[DslDesign::DescriptionResource("Navigation.Designer.Transition.Description", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
	[DslModeling::DomainModelOwner(typeof(global::Navigation.Designer.NavigationLanguageDomainModel))]
	[global::System.CLSCompliant(true)]
	[global::System.Diagnostics.DebuggerDisplay("{GetType().Name,nq} (Key = {keyPropertyStorage})")]
	[DslModeling::DomainRelationship()]
	[DslModeling::DomainObjectId("11077fd6-174f-42cd-b602-dd168e0c4919")]
	public partial class Transition : DslModeling::ElementLink
	{
		#region Constructors, domain class Id
		
		/// <summary>
		/// Transition domain class Id.
		/// </summary>
		public static readonly new global::System.Guid DomainClassId = new global::System.Guid(0x11077fd6, 0x174f, 0x42cd, 0xb6, 0x02, 0xdd, 0x16, 0x8e, 0x0c, 0x49, 0x19);
	
				
		/// <summary>
		/// Constructor
		/// Creates a Transition link in the same Partition as the given State
		/// </summary>
		/// <param name="source">State to use as the source of the relationship.</param>
		/// <param name="target">State to use as the target of the relationship.</param>
		public Transition(State source, State target)
			: base((source != null ? source.Partition : null), new DslModeling::RoleAssignment[]{new DslModeling::RoleAssignment(Transition.PredecessorDomainRoleId, source), new DslModeling::RoleAssignment(Transition.SuccessorDomainRoleId, target)}, null)
		{
		}
		
		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="store">Store where new link is to be created.</param>
		/// <param name="roleAssignments">List of relationship role assignments.</param>
		public Transition(DslModeling::Store store, params DslModeling::RoleAssignment[] roleAssignments)
			: base(store != null ? store.DefaultPartitionForClass(DomainClassId) : null, roleAssignments, null)
		{
		}
		
		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="store">Store where new link is to be created.</param>
		/// <param name="roleAssignments">List of relationship role assignments.</param>
		/// <param name="propertyAssignments">List of properties assignments to set on the new link.</param>
		public Transition(DslModeling::Store store, DslModeling::RoleAssignment[] roleAssignments, DslModeling::PropertyAssignment[] propertyAssignments)
			: base(store != null ? store.DefaultPartitionForClass(DomainClassId) : null, roleAssignments, propertyAssignments)
		{
		}
		
		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="partition">Partition where new link is to be created.</param>
		/// <param name="roleAssignments">List of relationship role assignments.</param>
		public Transition(DslModeling::Partition partition, params DslModeling::RoleAssignment[] roleAssignments)
			: base(partition, roleAssignments, null)
		{
		}
		
		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="partition">Partition where new link is to be created.</param>
		/// <param name="roleAssignments">List of relationship role assignments.</param>
		/// <param name="propertyAssignments">List of properties assignments to set on the new link.</param>
		public Transition(DslModeling::Partition partition, DslModeling::RoleAssignment[] roleAssignments, DslModeling::PropertyAssignment[] propertyAssignments)
			: base(partition, roleAssignments, propertyAssignments)
		{
		}
		#endregion
		#region Predecessor domain role code
		
		/// <summary>
		/// Predecessor domain role Id.
		/// </summary>
		public static readonly global::System.Guid PredecessorDomainRoleId = new global::System.Guid(0xa630ba51, 0xa1b9, 0x4bda, 0xbc, 0x57, 0xf1, 0x4b, 0x8c, 0xc3, 0x3a, 0x80);
		
		/// <summary>
		/// DomainRole Predecessor
		/// Description for Navigation.Designer.ExampleRelationship.Target
		/// </summary>
		[DslDesign::DisplayNameResource("Navigation.Designer.Transition/Predecessor.DisplayName", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslDesign::DescriptionResource("Navigation.Designer.Transition/Predecessor.Description", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslModeling::DomainRole(DslModeling::DomainRoleOrder.Source, PropertyName = "Successors", PropertyDisplayNameKey="Navigation.Designer.Transition/Predecessor.PropertyDisplayName",  PropagatesCopy = DslModeling::PropagatesCopyOption.DoNotPropagateCopy, Multiplicity = DslModeling::Multiplicity.ZeroMany)]
		[DslModeling::DomainObjectId("a630ba51-a1b9-4bda-bc57-f14b8cc33a80")]
		public virtual State Predecessor
		{
			[global::System.Diagnostics.DebuggerStepThrough]
			get
			{
				return (State)DslModeling::DomainRoleInfo.GetRolePlayer(this, PredecessorDomainRoleId);
			}
			[global::System.Diagnostics.DebuggerStepThrough]
			set
			{
				DslModeling::DomainRoleInfo.SetRolePlayer(this, PredecessorDomainRoleId, value);
			}
		}
				
		#endregion
		#region Static methods to access Predecessors of a State
		/// <summary>
		/// Gets a list of Predecessors.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static DslModeling::LinkedElementCollection<State> GetPredecessors(State element)
		{
			return GetRoleCollection<DslModeling::LinkedElementCollection<State>, State>(element, SuccessorDomainRoleId);
		}
		#endregion
		#region Successor domain role code
		
		/// <summary>
		/// Successor domain role Id.
		/// </summary>
		public static readonly global::System.Guid SuccessorDomainRoleId = new global::System.Guid(0xadbf7b8f, 0x7947, 0x438e, 0xba, 0x60, 0x1d, 0x0d, 0xcf, 0xa4, 0xcb, 0x58);
		
		/// <summary>
		/// DomainRole Successor
		/// Description for Navigation.Designer.ExampleRelationship.Source
		/// </summary>
		[DslDesign::DisplayNameResource("Navigation.Designer.Transition/Successor.DisplayName", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslDesign::DescriptionResource("Navigation.Designer.Transition/Successor.Description", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslModeling::DomainRole(DslModeling::DomainRoleOrder.Target, PropertyName = "Predecessors", PropertyDisplayNameKey="Navigation.Designer.Transition/Successor.PropertyDisplayName",  PropagatesCopy = DslModeling::PropagatesCopyOption.DoNotPropagateCopy, Multiplicity = DslModeling::Multiplicity.ZeroMany)]
		[DslModeling::DomainObjectId("adbf7b8f-7947-438e-ba60-1d0dcfa4cb58")]
		public virtual State Successor
		{
			[global::System.Diagnostics.DebuggerStepThrough]
			get
			{
				return (State)DslModeling::DomainRoleInfo.GetRolePlayer(this, SuccessorDomainRoleId);
			}
			[global::System.Diagnostics.DebuggerStepThrough]
			set
			{
				DslModeling::DomainRoleInfo.SetRolePlayer(this, SuccessorDomainRoleId, value);
			}
		}
				
		#endregion
		#region Static methods to access Successors of a State
		/// <summary>
		/// Gets a list of Successors.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static DslModeling::LinkedElementCollection<State> GetSuccessors(State element)
		{
			return GetRoleCollection<DslModeling::LinkedElementCollection<State>, State>(element, PredecessorDomainRoleId);
		}
		#endregion
		#region Key domain property code
		
		/// <summary>
		/// Key domain property Id.
		/// </summary>
		public static readonly global::System.Guid KeyDomainPropertyId = new global::System.Guid(0x7ed259d7, 0xc1ba, 0x4832, 0xad, 0x76, 0x2e, 0xc9, 0xd4, 0x0a, 0x74, 0x07);
		
		/// <summary>
		/// Storage for Key
		/// </summary>
		private global::System.String keyPropertyStorage = string.Empty;
		
		/// <summary>
		/// Gets or sets the value of Key domain property.
		/// Unique within a State and passed as the action parameter to the StateController
		/// when navigating.
		/// </summary>
		[DslDesign::DisplayNameResource("Navigation.Designer.Transition/Key.DisplayName", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslDesign::CategoryResource("Navigation.Designer.Transition/Key.Category", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslDesign::DescriptionResource("Navigation.Designer.Transition/Key.Description", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslModeling::ElementName]
		[DslModeling::DomainObjectId("7ed259d7-c1ba-4832-ad76-2ec9d40a7407")]
		public global::System.String Key
		{
			[global::System.Diagnostics.DebuggerStepThrough]
			get
			{
				return keyPropertyStorage;
			}
			[global::System.Diagnostics.DebuggerStepThrough]
			set
			{
				KeyPropertyHandler.Instance.SetValue(this, value);
			}
		}
		/// <summary>
		/// Value handler for the Transition.Key domain property.
		/// </summary>
		internal sealed partial class KeyPropertyHandler : DslModeling::DomainPropertyValueHandler<Transition, global::System.String>
		{
			private KeyPropertyHandler() { }
		
			/// <summary>
			/// Gets the singleton instance of the Transition.Key domain property value handler.
			/// </summary>
			public static readonly KeyPropertyHandler Instance = new KeyPropertyHandler();
		
			/// <summary>
			/// Gets the Id of the Transition.Key domain property.
			/// </summary>
			public sealed override global::System.Guid DomainPropertyId
			{
				[global::System.Diagnostics.DebuggerStepThrough]
				get
				{
					return KeyDomainPropertyId;
				}
			}
			
			/// <summary>
			/// Gets a strongly-typed value of the property on specified element.
			/// </summary>
			/// <param name="element">Element which owns the property.</param>
			/// <returns>Property value.</returns>
			public override sealed global::System.String GetValue(Transition element)
			{
				if (element == null) throw new global::System.ArgumentNullException("element");
				return element.keyPropertyStorage;
			}
		
			/// <summary>
			/// Sets property value on an element.
			/// </summary>
			/// <param name="element">Element which owns the property.</param>
			/// <param name="newValue">New property value.</param>
			public override sealed void SetValue(Transition element, global::System.String newValue)
			{
				if (element == null) throw new global::System.ArgumentNullException("element");
		
				global::System.String oldValue = GetValue(element);
				if (newValue != oldValue)
				{
					ValueChanging(element, oldValue, newValue);
					element.keyPropertyStorage = newValue;
					ValueChanged(element, oldValue, newValue);
				}
			}
		}
		
		#endregion
		#region CanNavigateBack domain property code
		
		/// <summary>
		/// CanNavigateBack domain property Id.
		/// </summary>
		public static readonly global::System.Guid CanNavigateBackDomainPropertyId = new global::System.Guid(0xbddda6ac, 0x4739, 0x4ff5, 0xac, 0x13, 0x0c, 0x71, 0x20, 0x87, 0x3a, 0xdb);
		
		/// <summary>
		/// Storage for CanNavigateBack
		/// </summary>
		private global::System.Boolean canNavigateBackPropertyStorage;
		
		/// <summary>
		/// Gets or sets the value of CanNavigateBack domain property.
		/// Set to true to ensure the linked States always have the same parent Dialog.
		/// </summary>
		[DslDesign::DisplayNameResource("Navigation.Designer.Transition/CanNavigateBack.DisplayName", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslDesign::CategoryResource("Navigation.Designer.Transition/CanNavigateBack.Category", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslDesign::DescriptionResource("Navigation.Designer.Transition/CanNavigateBack.Description", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslModeling::DomainObjectId("bddda6ac-4739-4ff5-ac13-0c7120873adb")]
		public global::System.Boolean CanNavigateBack
		{
			[global::System.Diagnostics.DebuggerStepThrough]
			get
			{
				return canNavigateBackPropertyStorage;
			}
			[global::System.Diagnostics.DebuggerStepThrough]
			set
			{
				CanNavigateBackPropertyHandler.Instance.SetValue(this, value);
			}
		}
		/// <summary>
		/// Value handler for the Transition.CanNavigateBack domain property.
		/// </summary>
		internal sealed partial class CanNavigateBackPropertyHandler : DslModeling::DomainPropertyValueHandler<Transition, global::System.Boolean>
		{
			private CanNavigateBackPropertyHandler() { }
		
			/// <summary>
			/// Gets the singleton instance of the Transition.CanNavigateBack domain property value handler.
			/// </summary>
			public static readonly CanNavigateBackPropertyHandler Instance = new CanNavigateBackPropertyHandler();
		
			/// <summary>
			/// Gets the Id of the Transition.CanNavigateBack domain property.
			/// </summary>
			public sealed override global::System.Guid DomainPropertyId
			{
				[global::System.Diagnostics.DebuggerStepThrough]
				get
				{
					return CanNavigateBackDomainPropertyId;
				}
			}
			
			/// <summary>
			/// Gets a strongly-typed value of the property on specified element.
			/// </summary>
			/// <param name="element">Element which owns the property.</param>
			/// <returns>Property value.</returns>
			public override sealed global::System.Boolean GetValue(Transition element)
			{
				if (element == null) throw new global::System.ArgumentNullException("element");
				return element.canNavigateBackPropertyStorage;
			}
		
			/// <summary>
			/// Sets property value on an element.
			/// </summary>
			/// <param name="element">Element which owns the property.</param>
			/// <param name="newValue">New property value.</param>
			public override sealed void SetValue(Transition element, global::System.Boolean newValue)
			{
				if (element == null) throw new global::System.ArgumentNullException("element");
		
				global::System.Boolean oldValue = GetValue(element);
				if (newValue != oldValue)
				{
					ValueChanging(element, oldValue, newValue);
					element.canNavigateBackPropertyStorage = newValue;
					ValueChanged(element, oldValue, newValue);
				}
			}
		}
		
		#endregion
		#region Order domain property code
		
		/// <summary>
		/// Order domain property Id.
		/// </summary>
		public static readonly global::System.Guid OrderDomainPropertyId = new global::System.Guid(0x184f9d4d, 0xa4b3, 0x486e, 0x92, 0x0b, 0xba, 0xb1, 0x6d, 0xfb, 0x47, 0xc9);
		
		/// <summary>
		/// Storage for Order
		/// </summary>
		private global::System.Int32 orderPropertyStorage;
		
		/// <summary>
		/// Gets or sets the value of Order domain property.
		/// The order of the Transition in the configuration.
		/// </summary>
		[DslDesign::DisplayNameResource("Navigation.Designer.Transition/Order.DisplayName", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslDesign::CategoryResource("Navigation.Designer.Transition/Order.Category", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslDesign::DescriptionResource("Navigation.Designer.Transition/Order.Description", typeof(global::Navigation.Designer.NavigationLanguageDomainModel), "Navigation.Designer.GeneratedCode.DomainModelResx")]
		[DslModeling::DomainObjectId("184f9d4d-a4b3-486e-920b-bab16dfb47c9")]
		public global::System.Int32 Order
		{
			[global::System.Diagnostics.DebuggerStepThrough]
			get
			{
				return orderPropertyStorage;
			}
			[global::System.Diagnostics.DebuggerStepThrough]
			set
			{
				OrderPropertyHandler.Instance.SetValue(this, value);
			}
		}
		/// <summary>
		/// Value handler for the Transition.Order domain property.
		/// </summary>
		internal sealed partial class OrderPropertyHandler : DslModeling::DomainPropertyValueHandler<Transition, global::System.Int32>
		{
			private OrderPropertyHandler() { }
		
			/// <summary>
			/// Gets the singleton instance of the Transition.Order domain property value handler.
			/// </summary>
			public static readonly OrderPropertyHandler Instance = new OrderPropertyHandler();
		
			/// <summary>
			/// Gets the Id of the Transition.Order domain property.
			/// </summary>
			public sealed override global::System.Guid DomainPropertyId
			{
				[global::System.Diagnostics.DebuggerStepThrough]
				get
				{
					return OrderDomainPropertyId;
				}
			}
			
			/// <summary>
			/// Gets a strongly-typed value of the property on specified element.
			/// </summary>
			/// <param name="element">Element which owns the property.</param>
			/// <returns>Property value.</returns>
			public override sealed global::System.Int32 GetValue(Transition element)
			{
				if (element == null) throw new global::System.ArgumentNullException("element");
				return element.orderPropertyStorage;
			}
		
			/// <summary>
			/// Sets property value on an element.
			/// </summary>
			/// <param name="element">Element which owns the property.</param>
			/// <param name="newValue">New property value.</param>
			public override sealed void SetValue(Transition element, global::System.Int32 newValue)
			{
				if (element == null) throw new global::System.ArgumentNullException("element");
		
				global::System.Int32 oldValue = GetValue(element);
				if (newValue != oldValue)
				{
					ValueChanging(element, oldValue, newValue);
					element.orderPropertyStorage = newValue;
					ValueChanged(element, oldValue, newValue);
				}
			}
		}
		
		#endregion
		#region Predecessor link accessor
		/// <summary>
		/// Get the list of Transition links to a State.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static global::System.Collections.ObjectModel.ReadOnlyCollection<global::Navigation.Designer.Transition> GetLinksToSuccessors ( global::Navigation.Designer.State predecessorInstance )
		{
			return DslModeling::DomainRoleInfo.GetElementLinks<global::Navigation.Designer.Transition>(predecessorInstance, global::Navigation.Designer.Transition.PredecessorDomainRoleId);
		}
		#endregion
		#region Successor link accessor
		/// <summary>
		/// Get the list of Transition links to a State.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static global::System.Collections.ObjectModel.ReadOnlyCollection<global::Navigation.Designer.Transition> GetLinksToPredecessors ( global::Navigation.Designer.State successorInstance )
		{
			return DslModeling::DomainRoleInfo.GetElementLinks<global::Navigation.Designer.Transition>(successorInstance, global::Navigation.Designer.Transition.SuccessorDomainRoleId);
		}
		#endregion
		#region Transition instance accessors
		
		/// <summary>
		/// Get any Transition links between a given State and a State.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static global::System.Collections.ObjectModel.ReadOnlyCollection<global::Navigation.Designer.Transition> GetLinks( global::Navigation.Designer.State source, global::Navigation.Designer.State target )
		{
			global::System.Collections.Generic.List<global::Navigation.Designer.Transition> outLinks = new global::System.Collections.Generic.List<global::Navigation.Designer.Transition>();
			global::System.Collections.Generic.IList<global::Navigation.Designer.Transition> links = DslModeling::DomainRoleInfo.GetElementLinks<global::Navigation.Designer.Transition>(source, global::Navigation.Designer.Transition.PredecessorDomainRoleId);
			foreach ( global::Navigation.Designer.Transition link in links )
			{
				if ( target.Equals(link.Successor) )
				{
					outLinks.Add(link);
				}
			}
			return outLinks.AsReadOnly();
		}
		/// <summary>
		/// Get the one Transition link between a given Stateand a State.
		/// </summary>
		[global::System.Diagnostics.DebuggerStepThrough]
		[global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1011")]
		public static global::Navigation.Designer.Transition GetLink( global::Navigation.Designer.State source, global::Navigation.Designer.State target )
		{
			global::System.Collections.Generic.IList<global::Navigation.Designer.Transition> links = DslModeling::DomainRoleInfo.GetElementLinks<global::Navigation.Designer.Transition>(source, global::Navigation.Designer.Transition.PredecessorDomainRoleId);
			foreach ( global::Navigation.Designer.Transition link in links )
			{
				if ( target.Equals(link.Successor) )
				{
					return link;
				}
			}
			return null;
		}
		
		#endregion
	}
}
